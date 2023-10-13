import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeatmapComponent } from './heatmap/heatmap.component';
import { CsvReaderComponent } from './csv-reader/csv-reader.component';


const routes: Routes = [
  { path: '', redirectTo: '/product-Information', pathMatch: 'full'},
  { path: 'total-value-heatmap',
          loadChildren:() => import('./total-value-heatmap/total-value-heatmap.module')
            .then(m => m.TotalValueHeatmapModule)},
  { path: 'total-number-heatmap',
          loadChildren: () => import('./total-number-heatmap/total-number-heatmap.module')
          .then(m => m.TotalNumberHeatmapModule)
  },
  { path: 'product-Information', component: CsvReaderComponent },
  { path: 'heatmap', component: HeatmapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
