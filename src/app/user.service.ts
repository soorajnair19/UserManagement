import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //Dependency Injection = Injecting built in htpp service inside constructor
  constructor(private http:HttpClient) { }

  baseUrl: string="http://localhost:3000/users";
  
  //Get all users
  getUsers(){
    return this.http.get<User[]>(this.baseUrl);
  }

  getUsersById(id:number){
    return this.http.get<User[]>(this.baseUrl+"/"+id);
  }

  createUser(user: User)
  {
    return this.http.post(this.baseUrl,user);
  }

  updateUser(user: User)
  {
    return this.http.put(this.baseUrl+"/"+user.id,user);
  }

  deleteUser(id:number)
  {
    return this.http.delete(this.baseUrl+"/"+id);
  }
}
