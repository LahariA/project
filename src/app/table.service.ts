import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TableService {
  

  constructor(private ht:HttpClient) {
  }


  getdata(){
    return this.ht.get("http://localhost:3000/table")
  }
}
