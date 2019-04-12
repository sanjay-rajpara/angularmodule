import {NgModule} from '@angular/core';
import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {SharedModule} from '../../shared/ng-model/shared.module';

/**
 * General login module
 */
@NgModule({
  imports: [SharedModule, LoginRoutingModule],
  declarations: [LoginComponent],
  providers: []
})
export class LoginModule { }
