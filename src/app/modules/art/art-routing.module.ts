import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommodoreComponent } from './components/commodore/commodore.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'commodore',
    component: CommodoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtRoutingModule { }
