import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalNumberHeatmapComponent } from './total-number-heatmap/total-number-heatmap.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', component: TotalNumberHeatmapComponent},
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class TotalNumberHeatmapRoutingModule { }
