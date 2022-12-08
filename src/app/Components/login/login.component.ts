import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/userservices/users.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  signinForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user : UsersService, private router : Router) { }
  ngOnInit(): void {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required,],
    })
  }
  get f() { return this.signinForm.controls; }
  onSubmit() {
    this.submitted = true;
    if(this.signinForm.valid){
      let payload = {
        email: this.signinForm.value.email,
        password: this.signinForm.value.password,
        
      }
      this.user.login(payload).subscribe((response:any)=>
      {
        console.log("Signin successfully",response)
        localStorage.setItem('token', response.data)
        this.router.navigateByUrl('/dashboard/note')
      })

    }
  }
}
