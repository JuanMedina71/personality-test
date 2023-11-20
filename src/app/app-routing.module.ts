import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogginComponent } from './components/loggin/loggin.component';
import { PublicComponent } from './components/public/public.component';
import { RegisterComponent } from './components/register/register.component';
import { VerificationComponent } from './components/verification/verification.component';

const routes: Routes = [
  { path: "", redirectTo:"loggin", pathMatch: "full"},
  { path: "loggin", component: LogginComponent},
  { path: "register", component: RegisterComponent},
  { path: "verification", component: VerificationComponent},
  { path: "public", component: PublicComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
