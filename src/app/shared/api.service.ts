import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postEmployee(data : any){
    return this.http.post<any>("http://localhost:3000/posts",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

   getEmployee(){
    return this.http.get<any>("http://localhost:3000/posts")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateEmployee(data : any,id:number){
    return this.http.put<any>("http://localhost:3000/posts/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteEmployee(id:number){
    return this.http.delete<any>("http://localhost:3000/posts/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }




  postEntryEmployee(data : any){
    return this.http.post<any>("http://localhost:3000/entry",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

   getEntryEmployee(){
    return this.http.get<any>("http://localhost:3000/entry")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateEntryEmployee(data : any,id:number){
    return this.http.put<any>("http://localhost:3000/entry/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteEntryEmployee(id:number){
    return this.http.delete<any>("http://localhost:3000/entry/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  
  postMidEmployee(data : any){
    return this.http.post<any>("http://localhost:3000/mid",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

   getMidEmployee(){
    return this.http.get<any>("http://localhost:3000/mid")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateMidEmployee(data : any,id:number){
    return this.http.put<any>("http://localhost:3000/mid/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteMidEmployee(id:number){
    return this.http.delete<any>("http://localhost:3000/mid/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  login(data :any){
    return this.http.post<any>("http://localhost:3000/login",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
