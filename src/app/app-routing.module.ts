import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VARKComponent } from './components/vark/vark.component';

const routes: Routes = [
  {path: "", redirectTo: "VARK", pathMatch: "full"},
  {path: "VARK", component: VARKComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
