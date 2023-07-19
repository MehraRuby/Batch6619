import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PowerOfPipe } from './power-of.pipe';
import { BracketsPipe } from './brackets.pipe';
import { FilternamesPipe } from './filternames.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PowerOfPipe,
    BracketsPipe,
    FilternamesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
