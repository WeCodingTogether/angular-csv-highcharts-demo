import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeatmapComponent } from './heatmap/heatmap.component';
import { CsvReaderComponent } from './csv-reader/csv-reader.component';
import { TotalNumberHeatmapComponent } from './total-number-heatmap/total-number-heatmap/total-number-heatmap.component';
import { TotalValueHeatmapComponent } from './total-value-heatmap/total-value-heatmap/total-value-heatmap.component';

const routes: Routes = [
  { path: 'total-value-heatmap',
          loadChildren:() => import('./total-value-heatmap/total-value-heatmap.module')
            .then(m => m.TotalValueHeatmapModule)},
  { path: 'product-Information', component: CsvReaderComponent },
  { path: 'total-number-heatmap',
          loadChildren: () => import('./total-number-heatmap/total-number-heatmap.module')
          .then(m => m.TotalNumberHeatmapModule)
  },
  { path: 'heatmap', component: HeatmapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
