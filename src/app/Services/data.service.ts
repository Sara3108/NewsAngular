import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resource } from 'selenium-webdriver/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url:string, private http: HttpClient) { }

  GetAll(){
    return this.http.get(this.url);
  }

  
  
  Create(resource){
    return this.http.post(this.url,JSON.stringify(resource));
  }

  Update(resource){
    return this.http.put(this.url+'/'+resource.id,JSON.stringify(resource));
  }

  Delete(id){
    return this.http.delete(this.url+'/'+id);
  }

  GetById(id){
   return this.http.get(this.url+'/'+id);
  }

}
