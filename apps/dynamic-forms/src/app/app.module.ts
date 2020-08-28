import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormFieldRendererModule } from '@jva/form-field/renderer';
import { FormFieldTextModule } from '@jva/form-field/text';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, FormFieldTextModule, MatButtonModule, FormFieldRendererModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
