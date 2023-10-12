import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TotalValueHeatmapComponent } from './total-value-heatmap/total-value-heatmap.component';

const routes: Routes = [
  { path: '', component: TotalValueHeatmapComponent},
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class TotalValueHeatmapRoutingModule { }
