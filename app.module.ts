import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AgricultureloanComponent } from './agricultureloan/agricultureloan.component';
import { BankbalanceComponent } from './bankbalance/bankbalance.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { GoldloanComponent } from './goldloan/goldloan.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { HomeloanComponent } from './homeloan/homeloan.component';
import { LandloanComponent } from './landloan/landloan.component';
import { LoginComponent } from './login/login.component';
import { LicloanComponent } from './licloan/licloan.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SubmitComponent } from './submit/submit.component';
import { TranscationComponent } from './transcation/transcation.component';
import { VechicleloanComponent } from './vechicleloan/vechicleloan.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    AgricultureloanComponent,
    BankbalanceComponent,
    CheckoutComponent,
    GoldloanComponent,
    HelpComponent,
    HomeComponent,
    HomeloanComponent,
    LandloanComponent,
    LoginComponent,
    LicloanComponent,
    SignUpComponent,
    SubmitComponent,
    TranscationComponent,
    VechicleloanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
