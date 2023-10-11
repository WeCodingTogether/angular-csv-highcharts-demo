import { Component, OnInit } from '@angular/core';
import { CsvReaderService } from '../csv-reader.service';
import { Product } from '../product';

@Component({
  selector: 'app-csv-reader',
  templateUrl: './csv-reader.component.html',
  styleUrls: ['./csv-reader.component.css']
})
export class CsvReaderComponent implements OnInit {

  products: Product[] = [];

  constructor(private csvReaderService: CsvReaderService) {}

  ngOnInit(): void {

    this.csvReaderService.readCsvData().subscribe(((productsData: Product[]) => {
      if(this.products.length > 0) {
        this.products = [];
      }
      this.products = productsData;
    }))
  }




}
