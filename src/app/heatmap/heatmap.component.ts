import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as Highcharts from 'highcharts';
import highchartsHeatmap from 'highcharts/modules/heatmap';
import accessibility  from 'highcharts/modules/accessibility';
import { Product } from '../product';
import { Subscription, distinctUntilChanged } from 'rxjs';
import { CsvReaderService } from '../csv-reader.service';
import { ActivatedRoute } from '@angular/router';
highchartsHeatmap(Highcharts);
accessibility(Highcharts);

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.css']
})
export class HeatmapComponent implements OnInit {

  subscription!: Subscription;
  products: Product[] = [];
  xAxisGrp: string[] = ['Grp1', 'Grp2', 'Grp3'];
  yAxisCat: string[] = ['Cat1', 'Cat2', 'Cat3'];
  seriesDataForValue: number[][] = [];

  HighCharts: typeof Highcharts = Highcharts;
  valueChartOptions!: Highcharts.Options;

  constructor(
    private csvReaderService: CsvReaderService,
    private route: ActivatedRoute,
    private changeDetector: ChangeDetectorRef
  ) {}


  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.subscription = this.csvReaderService.getProducts()
      .pipe(distinctUntilChanged())
      .subscribe(cavProductData => {
        this.products = cavProductData;
        this.seriesDataForValue = this.addTotalValue(this.groupProducts());// after get products data then execute this method
        // setTimeout(() => {
        //   this.initValueChart();
        // }, 1000);
        //this.changeDetector.detectChanges();
        this.initValueChart();

      })
    })

  }

  ngDestroy() {
    this.subscription.unsubscribe();
  }

  groupProducts(): Map<string, Product[]> {
  //console.log('groupProducts is launching ...');
    let groupProducts = new Map<string, Product[]>();

    if (!this.products || this.products.length === 0) {
    //console.log('this.products is empty or undefined');
    return new Map<string, Product[]>();
  }

  for(const product of this.products) {
    const key = product.category + product.group;
    console.log("key: " + key);
    if(!groupProducts.has(key)) {
      groupProducts.set(key, []);
    }
    groupProducts.get(key)?.push(product);
  }

  return groupProducts;
  }

  addTotalValue(groupProducts: Map<string, Product[]>): number[][]  {
    console.log('addTotalValue is launching...');
    for(const [key, products] of groupProducts) {
      const matchResult = key.match(/(Cat\d+)(Grp\d+)/);
      //console.log("matchResult: " +matchResult);
      if(matchResult) {
        //const [category, group] = matchResult.slice(1);
        const category = matchResult[1];
        const group = matchResult[2];
        console.log("group: " + group + "; category: " + category);

        const xIndex = this.xAxisGrp.indexOf(group);
        const yIndex = this.yAxisCat.indexOf(category);
        console.log("xIndex: " + xIndex + " ; yIndex" + yIndex);

        if(xIndex !== -1 && yIndex !== -1) {
          this.getValue(products, xIndex, yIndex);
        }
      }
    }
    console.log('seriesData', this.seriesDataForValue);
    return this.seriesDataForValue;
  }

  getValue(products: Product[], xIndex: number, yIndex: number): number[][] {
    const totalValue = products.reduce((sum, product) => sum + product.value, 0);
    let dataForValue: number[] = [];
    dataForValue[0] = xIndex;
    dataForValue[1] = yIndex;
    dataForValue[2] = totalValue
    this.seriesDataForValue.push(dataForValue);
    return this.seriesDataForValue;
  }

  initValueChart() {
    return this.valueChartOptions = {
      credits: {
        enabled: false,  // exclusive watermark of highcharts
      },
      chart: {
          type: 'heatmap',
          marginTop: 40,
          marginBottom: 80,
          plotBorderWidth: 1
      },


      title: {
          text: 'Sample Data',
          style: {
              fontSize: '1em'
          }
      },

      xAxis: {
          categories: this.xAxisGrp,
          // tickInterval:2
      },

      yAxis: {
          categories: this.yAxisCat,
          reversed: false,


      },

      accessibility: {
          point: {
              descriptionFormat: '{(add index 1)}. ' +
                  '{series.xAxis.categories.(x)} and  ' +
                  '{series.yAxis.categories.(y)}, total value is {value}.'
          }
      },

      colorAxis: {
          min: 0,
          minColor: '#00ffbf',
          maxColor: '#867979'
      },

      legend: {
          enabled: false
      },

      tooltip: {
          format: '<b>{series.xAxis.categories.(point.x)}</b> and ' +
                  '<b>{series.yAxis.categories.(point.y)}</b><br>' +
                  '<b>Total Value is {point.value}</b><br>'

      },

      series: [{
          type: 'heatmap',
          name: 'Products Info',
          borderWidth: 1,
          data: [[0, 0, 10], [0, 1, 19], [0, 2, 8],
              [1, 0, 92], [1, 1, 58], [1, 2, 78],
              [2, 0, 35], [2, 1, 15], [2, 2, 123],],
          // data: this.seriesDataForValue,
          dataLabels: {
              enabled: true,
              color: '#000000'
          },
          colsize: 0.6,
          rowsize: 0.8
      }],

      responsive: {
          rules: [{
              condition: {
                  maxWidth: 500
              },
              chartOptions: {
                yAxis: {
                    labels: {
                        format: '{substr value 0 1}'
                    }
                }
              }
          }]
      }
    }
  }

}
