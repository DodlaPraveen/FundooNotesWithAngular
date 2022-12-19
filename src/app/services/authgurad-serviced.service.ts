import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguradServicedService {
  token: any;
  constructor() { }
  gettoken(){  
    return !!localStorage.getItem("token");  
    }  
}
