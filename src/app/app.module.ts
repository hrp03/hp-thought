import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodeService } from './services/code.service';
import { CodeComponent } from './components/code/code.component';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { HomeComponent } from './components/home/home.component';
import { TestYourVoiceComponent } from './components/ring-the-bell/ring-the-bell.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeComponent,
    HomeComponent,
    TestYourVoiceComponent
  ],
  imports: [
    BrowserModule,
    CodemirrorModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
