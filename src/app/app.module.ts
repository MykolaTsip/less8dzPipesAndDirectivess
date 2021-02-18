import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SomethinkComponent } from './components/somethink/somethink.component';
import {HttpClientModule} from '@angular/common/http';
import { MyPipeAddRandomNumberPipe } from './pipes/my-pipe-add-random-number.pipe';
import { FontSize22Directive } from './derectives/font-size-22.directive';

@NgModule({
  declarations: [
    AppComponent,
    SomethinkComponent,
    MyPipeAddRandomNumberPipe,
    FontSize22Directive
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
