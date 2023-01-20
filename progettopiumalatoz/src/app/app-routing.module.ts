import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompDocComponent } from './comp-doc/comp-doc.component';
import { CompVerComponent } from './comp-ver/comp-ver.component';

const routes: Routes = [
  { path: 'verifiche', component: CompVerComponent}
  { path: 'docenti', component: CompDocComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
