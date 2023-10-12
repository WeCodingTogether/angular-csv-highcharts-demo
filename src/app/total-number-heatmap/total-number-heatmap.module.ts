import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalNumberHeatmapComponent } from './total-number-heatmap/total-number-heatmap.component';
import { TotalNumberHeatmapRoutingModule } from './total-number-heatmap-routing.module';
import { HighchartsChartModule } from 'highcharts-angular';



@NgModule({
  declarations: [TotalNumberHeatmapComponent],
  imports: [
    TotalNumberHeatmapRoutingModule,
    HighchartsChartModule
  ]
})
export class TotalNumberHeatmapModule { }
