import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { BuilderModule } from '@jva/builder';

import { AppComponent } from './app.component';
import { AppFormFieldModule } from './app-form-field.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BuilderModule, BrowserAnimationsModule, MatButtonModule, AppFormFieldModule, MatCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
