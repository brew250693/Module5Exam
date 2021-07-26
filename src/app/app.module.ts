import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MessagesModule} from 'primeng/messages';

import {ToastModule} from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "./shared/shared.module";
import {ButtonModule} from "primeng/button";
import {MessageModule} from "primeng/message";
import {RippleModule} from "primeng/ripple";

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
               //api
@NgModule({
  declarations: [
    AppComponent,
    // BookListComponent,
    // BookCreateComponent,
    // BookEditComponent,
    // BookDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MessagesModule,
    MessageModule,
    ButtonModule,
    RippleModule,
    ToastModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
