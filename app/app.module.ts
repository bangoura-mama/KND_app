import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{AngularFireModule} from '@angular/fire/compat';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LacroseComponent } from './lacrose/lacrose.component';
import { AccComponent } from './acc/acc.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyMailComponent } from './verify-mail/verify-mail.component';
import { FormsModule } from '@angular/forms';
import { HotelsComponent } from './hotels/hotels.component';


@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    LacroseComponent,
    AccComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerifyMailComponent,
    HotelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
