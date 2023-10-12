import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeatmapComponent } from './heatmap/heatmap.component';
import { CsvReaderComponent } from './csv-reader/csv-reader.component';
import { TotalNumberHeatmapComponent } from './total-number-heatmap/total-number-heatmap/total-number-heatmap.component';
import { TotalNumberHeatmapModule } from './total-number-heatmap/total-number-heatmap.module';
import { TotalValueHeatmapModule } from './total-value-heatmap/total-value-heatmap.module';

@NgModule({
  declarations: [
    AppComponent,
    HeatmapComponent,
    CsvReaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    HttpClientModule,
    TotalNumberHeatmapModule,
    TotalValueHeatmapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
