import { NgModule } from '@angular/core';
import { TotalNumberHeatmapComponent } from './total-number-heatmap/total-number-heatmap.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', component: TotalNumberHeatmapComponent },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class TotalNumberHeatmapRoutingModule { }
