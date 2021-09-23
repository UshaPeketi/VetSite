import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { BdemoComponent } from './component/bdemo/bdemo.component';
import { DappComponent } from './component/dapp/dapp.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { StatusComponent } from './component/status/status.component';

const routes: Routes = [
 {path:"home",component:HomeComponent},
 {path:"signin",component:SigninComponent},
 {path:"navbar",component:NavbarComponent},
 {path:"aboutus",component:AboutusComponent},
 {path:"signup",component:SignupComponent},
 {path:"dapp",component:DappComponent},
 {path:"status",component:StatusComponent},
 {path:"bdemo",component:BdemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
