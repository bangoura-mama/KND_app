import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private auth: AuthService) { }


  ngOnInit(): void { }

  login() {

    if (this.email == '') {
      alert('Veuillez saisir votre email');
      return;
    }
    if (this.password == '') {
      alert('Veuillez saisir votre mot de passe');
      return;
    }
    this.auth.login(this.email, this.password);

    this.email = '';
    this.password = '';
  }
  SignInWithGoogle(){
    this.auth.googleSignIn();
  }
}
