import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/userservices/users.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  reset!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private user : UsersService) {  }
  ngOnInit(): void {
    this.reset = this.formBuilder.group({
      newpassword: ['', [Validators.required,]],
      conformpassword: ['', Validators.required, ],
    });   
  }
  get f() { return this.reset.controls; }
  onSubmit() {
    this.submitted = true;
    if(this.reset.valid){
      let payload = {
        password: this. reset.value.newpassword,
        confirmPassword: this.reset.value.conformpassword,
        service: "advance"
        
      }
      this.user.reset(payload).subscribe((response:any)=>
      {
        console.log("Password Reset Successfully",response)
      })

    }

  }
}
