import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalValueHeatmapRoutingModule } from './total-value-heatmap-routing.module';
import { TotalValueHeatmapComponent } from './total-value-heatmap/total-value-heatmap.component';
import { HighchartsChartModule } from 'highcharts-angular';



@NgModule({
  declarations: [TotalValueHeatmapComponent],
  imports: [
    TotalValueHeatmapRoutingModule,
    HighchartsChartModule,
  ]
})
export class TotalValueHeatmapModule { }
