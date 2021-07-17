import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { CommodoreComponent } from './components/commodore/commodore.component';
import { ArtRoutingModule } from './art-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    CommodoreComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ArtRoutingModule
  ]
})
export class ArtModule { }
