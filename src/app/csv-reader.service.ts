import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CsvReaderService {

  products: Product[] = [];

  constructor(private http: HttpClient) {}

  readCsvData(): Observable<Product[]> {
    return this.http.get('assets/products.csv', { responseType: 'text'})
            .pipe(
              map(csvData => {
                const cavRows = csvData.split('\n');
                for(let i = 1; i< cavRows.length - 1; i++) {
                  const csvValues = cavRows[i].split(',');
                  const product = new Product();
                  product.partNo = csvValues[0];
                  product.partName = csvValues[1];
                  product.category = csvValues[2];
                  product.group = csvValues[3];
                  product.value = +csvValues[4];
                  this.products.push(product);
                }
                return this.products;
              })
            )
  }

}
