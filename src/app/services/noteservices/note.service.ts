import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservices/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token:any;
  constructor(private http:HttpService) {
    
   }

   addnote(payload: any){
    this.token = localStorage.getItem('token')
    console.log("inside note service",payload);
    console.log(this.token)

    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
       'Authorization': 'Bearer '+ this.token
      })
    }
    return this.http.postService('/Notes/AddNote',payload,true,header)

  }
  getall(){
    this.token=localStorage.getItem('token')
    console.log(this.token)
    
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
       'Authorization': 'Bearer ' +this.token
      })
    }
    return this.http.getService(`/Notes/AllNotes`,true,header)

  }
  



}
