import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CodeComponent } from './components/code/code.component';
import { HomeComponent } from './components/home/home.component';
import { TestYourVoiceComponent } from './components/ring-the-bell/ring-the-bell.component';

const routes: Routes = [

  {
    path: 'code',
    component: CodeComponent
  },
  {
    path: 'ring-the-bell',
    component: TestYourVoiceComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
