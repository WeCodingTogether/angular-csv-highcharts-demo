import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { BehaviorSubject, Observable, distinctUntilChanged, map, take } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CsvReaderService {

  // products: Product[] = [];
  private products$ = new BehaviorSubject<Product[]>([]);

  constructor(private http: HttpClient) {
    this.readCsvData();
  }

  // readCsvData(): Observable<Product[]> {
  //   return this.http.get('assets/products.csv', { responseType: 'text'})
  //           .pipe(
  //             map(csvData => {
  //               const cavRows = csvData.split('\n');
  //               for(let i = 1; i< cavRows.length - 1; i++) {
  //                 const csvValues = cavRows[i].split(',');
  //                 const product = new Product();
  //                 product.partNo = csvValues[0];
  //                 product.partName = csvValues[1];
  //                 product.category = csvValues[2];
  //                 product.group = csvValues[3];
  //                 product.value = +csvValues[4];
  //                 this.products.push(product);
  //               }
  //               return this.products;
  //             }),
  //             take(1)
  //           );
  // }

  readCsvData(): void {
    fetch('assets/products.csv')
    .then(response => response.text())
    .then(csvData => {
      const products = csvData.split('\n')
        .slice(1)  // skip the first header line
        .filter(row => row !== '')  // remove the last blank line
        .map(
          row => {
            const csvValues = row.split(',');
            return {
              partNo: csvValues[0],
              partName: csvValues[1],
              category: csvValues[2],
              group: csvValues[3],
              value: +csvValues[4]
            };
          }
        );
          this.products$.next(products);
    });
  }

  getProducts(): Observable<Product[]> {
    return this.products$.asObservable().pipe(distinctUntilChanged());
  }

}
