import {LoginComponent} from './login.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

/**
 * Routing module to load login page.
 */
const routes: Routes = [
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
