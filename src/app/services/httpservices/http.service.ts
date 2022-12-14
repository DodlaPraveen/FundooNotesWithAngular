import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseurl = 'https://localhost:44363/api';


  constructor(private httpclient : HttpClient){ }

  postService(url:string, reqdata:any, token: boolean = false, httpoptions:any){
    return this.httpclient.post(this.baseurl+url, reqdata, token && httpoptions)

  }
  getService(url:string,token:boolean=false,httpoptions:any){
    return this.httpclient.get(this.baseurl+url, token && httpoptions)
  }

  putService(url:string,reqdata:any,token:boolean=false,httpoptions:any){
    return this.httpclient.put(this.baseurl+url, reqdata, token && httpoptions)
  }
  deleteService(){

  }
  patchService(){

  }
}
