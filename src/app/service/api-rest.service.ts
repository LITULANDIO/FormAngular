import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsersInterface } from '../models/usersInterface';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  user: Observable<any>;
  headers = new HttpHeaders({
    'Content-Type': 'application/json'

  });

  constructor(private http: HttpClient) { }

  public selectedUser: UsersInterface = {
    
    id: null,
    name: '',
    surname: '',
    identification: '',
    document_type: '',
    gender: '',
    email: '',
    password: ''
  };

  //Petición get para listar usuarios
getUsers(): Observable<any>{
  const url_api = 'https://my-json-server.typicode.com/volkz/technical-form/users';
  return this.http.get(url_api);
}

//Peticion post para nuevo usuario
createUsers(user: UsersInterface){
  
  const url_api = 'https://my-json-server.typicode.com/volkz/technical-form/users';
  return this.http.post(url_api, user, { headers: this.headers });
}



}
