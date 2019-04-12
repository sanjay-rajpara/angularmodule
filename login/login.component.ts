import {Component} from '@angular/core';
import {UserService} from '../../shared/service/user.service';

/**
 * Login component
 */
@Component({
  selector: 'q-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = new LoginForm();

  constructor(private userService: UserService) {
  }

  onSubmit() {
    this.userService.login(this.loginForm.login, this.loginForm.pass);
  }

}

/**
 * Helper class to handle login process
 */
class LoginForm {
  login: string;
  pass: string;
}
