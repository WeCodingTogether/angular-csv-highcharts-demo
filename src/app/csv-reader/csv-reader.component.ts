import { Component, OnInit } from '@angular/core';
import { CsvReaderService } from '../csv-reader.service';
import { Product } from '../product';
import { Subscription, distinctUntilChanged } from 'rxjs'

@Component({
  selector: 'app-csv-reader',
  templateUrl: './csv-reader.component.html',
  styleUrls: ['./csv-reader.component.css']
})
export class CsvReaderComponent implements OnInit {

  products: Product[] = [];
  subscription!: Subscription;

  constructor(private csvReaderService: CsvReaderService) {}

  ngOnInit(): void {

    // this.subscription = this.csvReaderService.readCsvData().subscribe(((productsData: Product[]) => {
    //   if(this.products.length > 0) {
    //     this.products = [];
    //   }
    //   this.products = productsData;
    // }))

    this.subscription = this.csvReaderService.getProducts()
      .pipe(distinctUntilChanged())
      .subscribe(
        (productsData: Product[]) => {
          this.products = productsData;
        }
      )
  }

  ngDestory(): void {
    this.subscription.unsubscribe();
  }



}
