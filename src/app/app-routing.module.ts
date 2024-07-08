import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageDetailComponent } from './image-detail/image-detail.component';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./image-grid/image-grid.component').then(
        (m) => m.ImageGridComponent
      ),
  },
  { path: 'photos/:id', component: ImageDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
