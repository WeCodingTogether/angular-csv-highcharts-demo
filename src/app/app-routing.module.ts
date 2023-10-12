import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeatmapComponent } from './heatmap/heatmap.component';
import { CsvReaderComponent } from './csv-reader/csv-reader.component';

const routes: Routes = [
  { path: 'sample-heatmap', component: HeatmapComponent },
  { path: 'product-Information', component: CsvReaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
