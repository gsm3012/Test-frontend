import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }

public createUser(user:any)
{
    return this.http.post("http://localhost:8080/user/registration", user);
}


}
