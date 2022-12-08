import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservices/http.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  token:any;
  constructor(private httpservice : HttpService) { }

  registration(payload:any){
    let header={
      Headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
   
return this.httpservice.postService('/User/Register', payload, false, header)
  }

  login(payload:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
   
return this.httpservice.postService('/User/Login', payload, false, header)
  }

  forget(payload:any){
    let header={
      Headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpservice.postService('/User/Forgetpassword?email=string', payload, false, header)
  }

  reset(payload:any){
    let header={
      Headers:new HttpHeaders({
                
        'Content-Type': 'application/json'
        
        
      })
    }
    return this.httpservice.postService('/User/Reset', payload, false, header)
    
  }
  
}
