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
  trashnote(req:any){
    console.log(req)
    let header={

      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' +this.token

      })
    }
    return this.http.putService(`/Notes/Trash?noteid=${req.noteID}`,req,true,header)
  }
  Archive(req:any){
    console.log(req)
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' +this.token
  
      })
    }
    return this.http.putService(`/Notes/Archive?noteid=${req.noteID}`,req,true,header)
  
  }
  updatenote(data:any){
    console.log(data)
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' +this.token

      })
    }
    return this.http.putService(`/Notes/Update?noteid=${data.noteId}`,data,true,header)
  }



}
