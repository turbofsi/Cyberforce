import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegistraionComponent } from './registraion.component';
import { Router } from '@angular/router/src/router';

const pathList: Routes = [
  { path: 'register', component: RegistraionComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( pathList )
  ],
  declarations: [
    RegistraionComponent
  ]
})
export class RegistrationModule { }
