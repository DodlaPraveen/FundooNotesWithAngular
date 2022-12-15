import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from './Components/archive/archive.component';
import { CreateNoteComponent } from './Components/create-note/create-note.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { GetAllNoteComponent } from './Components/get-all-note/get-all-note.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { TrashComponent } from './Components/trash/trash.component';

const routes: Routes = [
  {path : 'register' , component:RegistrationComponent},
  {path : 'login' , component:LoginComponent},
  {path: 'forget' , component:ForgetPasswordComponent},
  {path: 'reset' , component:ResetPasswordComponent},
  {path:'dashboard' , component:DashboardComponent,
children:[
  {path:'note' , component:GetAllNoteComponent},
  
  {path:'trash', component:TrashComponent},
  {path:'archiv',component:ArchiveComponent},

]

},
  

  {path:'create-note' , component:CreateNoteComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
