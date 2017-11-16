import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Route } from '@angular/router/src/config';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegistrationModule } from './registration/registration.module';

const paths: Routes = [
  { path : 'about', component : AboutComponent },
  { path : 'contact', component : ContactComponent },
  { path : 'notfound', component : NotfoundComponent },
  { path : '', redirectTo : 'about', pathMatch : 'full' },
  { path : '**', redirectTo : 'notfound', pathMatch : 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( paths ),
    RegistrationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
