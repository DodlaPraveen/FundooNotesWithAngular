import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/userservices/users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',

  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  registerForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private user : UsersService) { }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group
      ({

        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]

      });
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
    if(this.registerForm.valid){
      let payload = {
        firstName: this.registerForm.value.firstName, // leftside firstname is exactly same as that of backend API and rightside firstname i.e., ,firstName should be exact same as that of formcontrolname in .html file or same as written above in ngonit 
        lastName: this.registerForm.value.lastName,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        
      }
      this.user.registration(payload).subscribe((response:any)=>{
        console.log("registration successfully",response)
      })

    }
  }
}


