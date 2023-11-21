import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { LogginComponent } from './components/loggin/loggin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PublicComponent } from './components/public/public.component';
import { RegisterComponent } from './components/register/register.component';
import { TestComponent } from './components/test/test.component';
import { VarkComponent } from './components/vark/vark.component';
import { VerificationComponent } from './components/verification/verification.component';



@NgModule({
  declarations: [
    AppComponent,
    LogginComponent,
    VarkComponent,
    TestComponent
    NavbarComponent,
    RegisterComponent,
    VerificationComponent,
    PublicComponent,
    AdminPanelComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
