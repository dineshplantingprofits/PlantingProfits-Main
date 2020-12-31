
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import Amplify, { Auth } from 'aws-amplify';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms'; 

Amplify.configure({
  Auth:{
    mandatorySignIn:true,
    region: 'us-west-2',
    userPoolId: 'us-west-2_kB2bIti8V',
    userPoolWebClientId: '73716oevsu5f62tuadrkcidism',
    authenticationFlowType:'USER_PASSWORD_AUTH'
  }

});



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
