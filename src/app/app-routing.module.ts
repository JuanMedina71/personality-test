import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { LogginComponent } from './components/loggin/loggin.component';
import { PublicComponent } from './components/public/public.component';
import { RegisterComponent } from './components/register/register.component';
import { TestComponent } from './components/test/test.component';
import { VerificationComponent } from './components/verification/verification.component';
import { DashboardJungComponent } from './components/dashboard-jung/dashboard-jung.component';
import { CatalogovComponent } from './components/catalogov/catalogov.component';
import { CatalogojComponent } from './components/catalogoj/catalogoj.component';

const routes: Routes = [
  { path: "", redirectTo:"public", pathMatch: "full"},
  { path: "loggin", component: LogginComponent},
  { path: "register", component: RegisterComponent},
  { path: "verification", component: VerificationComponent},
  { path: "public", component: PublicComponent},
  { path: "adminPanel", component: AdminPanelComponent},
  {path: "testP", component: TestComponent},
  {path: "dashbordJ", component: DashboardJungComponent},
  {path: "catalogoV", component: CatalogovComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
