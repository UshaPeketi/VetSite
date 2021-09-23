import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { SigninComponent } from './component/signin/signin.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SignupComponent } from './component/signup/signup.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { DappComponent } from './component/dapp/dapp.component';
import { StatusComponent } from './component/status/status.component';
import { BdemoComponent } from './component/bdemo/bdemo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    NavbarComponent,
    SignupComponent,
    AboutusComponent,
    DappComponent,
    StatusComponent,
    BdemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
