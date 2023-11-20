import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VarkComponent } from './components/vark/vark.component';

const routes: Routes = [
  {path: "", redirectTo: "VARK", pathMatch: "full"},
  {path: "VARK", component: VarkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
