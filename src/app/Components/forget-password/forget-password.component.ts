import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/userservices/users.service';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  forget!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user : UsersService) {  }
  ngOnInit(): void {
    this.forget = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    })
    
    
  }
  get f() { return this.forget.controls; }
  onSubmit(){
    this.submitted = true;
    if(this.forget.valid){
      let payload = {
        email: this.forget.value.email,
        //password: this.forget.value.password,
        service: "advance"
      }
      this.user.forget(payload).subscribe((response:any)=>
      {
        console.log("Password reset link has been sent to your Email",response)
      })

    }

  }
}
