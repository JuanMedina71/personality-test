import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { CatalogovComponent } from './components/catalogov/catalogov.component';
import { DashboardJungComponent } from './components/dashboard-jung/dashboard-jung.component';
import { DashboardVarkComponent } from './components/dashboard-vark/dashboard-vark.component';
import { LogginComponent } from './components/loggin/loggin.component';
import { PublicComponent } from './components/public/public.component';
import { RegisterComponent } from './components/register/register.component';
import { ResultadosVarkComponent } from './components/resultados-vark/resultados-vark.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { TestComponent } from './components/test/test.component';
import { VarkComponent } from './components/vark/vark.component';
import { VerificationComponent } from './components/verification/verification.component';

const routes: Routes = [
  { path: "", redirectTo:"public", pathMatch: "full"},
  { path: "loggin", component: LogginComponent},
  { path: "register", component: RegisterComponent},
  { path: "verification", component: VerificationComponent},
  { path: "public", component: PublicComponent},
  { path: "adminPanel", component: AdminPanelComponent},
  {path: "testP", component: TestComponent},
  {path: "VARK", component: VarkComponent},
  {path: "tablaJ", component: DashboardJungComponent},
  {path: "tablaV", component: DashboardVarkComponent},
  {path: "resultados", component: ResultadosComponent},
  {path: "resultadosVark", component: ResultadosVarkComponent},
  {path: "catalogoV", component: CatalogovComponent},
  
  {path: "**", redirectTo: "public", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
