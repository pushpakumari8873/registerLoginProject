import { Component, inject } from '@angular/core';
import { LoginModel, RegisterModel } from '../../model/model';
import { FormsModule } from '@angular/forms';
import { RegisterLoginService } from '../../services/register-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  activeForm: string = 'login';

  regisLoginSrv = inject(RegisterLoginService);
  router = inject(Router);

  registerObj: RegisterModel = new RegisterModel();
  loginObj: LoginModel = new LoginModel;




  onRegister() {
    this.regisLoginSrv.registerUser(this.registerObj).subscribe((res: any) => {
      if (res.result) {
        alert("User Registered Successfully");
        this.activeForm = 'login';
      } else {
        alert("User Registration Failed")
      }
    })
  }

  onLogin() {
    this.regisLoginSrv.loginUser(this.loginObj).subscribe((res: any) => {
      if (res.result) {
        alert("User Logged In Successfully");
        localStorage.setItem("token", res.data.token);
        this.router.navigate(['dashboard'])
      } else {
        alert("User Login Failed")
      }
    })
  }


}
