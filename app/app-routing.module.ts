import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LacroseComponent } from './lacrose/lacrose.component'; // Remplacez par le chemin de votre composant Lac Rose
import { AppComponent } from './app.component';
import { AccComponent } from './acc/acc.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerifyMailComponent } from './verify-mail/verify-mail.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  // Autres routes...
  {path :'login',component: LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'forgot-password',component:ForgotPasswordComponent},
  {path:'verify-mail',component: VerifyMailComponent},
  { path: 'lacrose', component: LacroseComponent },
  { path: 'app', component: AppComponent },
  { path: 'acc', component: AccComponent }, // La route vers le composant Lac Rose

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

