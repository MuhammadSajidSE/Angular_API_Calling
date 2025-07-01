import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CropsService {

  constructor(private http:HttpClient) { }

  getCrop(){
    const url = "http://152.67.10.128:5280/api/crops";
    return this.http.get(url);
  }

getUser(){
  const url ="http://152.67.10.128:5280/api/Admin/User";
 return this.http.get(url);
}


SearchCrop(name: string) {
  const url = `http://152.67.10.128:5280/api/crops/search/${name}`;
  return this.http.get(url);
}
}
