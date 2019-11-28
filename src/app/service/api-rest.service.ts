import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UsersInterface } from "../models/usersInterface";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ApiRestService {
  user: Observable<any>;
  headers = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(private http: HttpClient) {}

  //Recuperamos datos
  public selectedUser: UsersInterface = {
    id: null,
    name: "",
    surname: "",
    identification: "",
    document_type: "",
    gender: "",
    email: "",
    password: ""
  };

  //Petición get para listar usuarios
  getUsers(): Observable<any> {
    const url_api =
      "https://my-json-server.typicode.com/volkz/technical-form/users";
    return this.http.get(url_api);
  }

  //Peticion post para nuevo usuario
  createUsers(user: UsersInterface): Observable<any> {
    const url_api =
      "https://my-json-server.typicode.com/volkz/technical-form/users";
    return this.http.post(url_api, user, { headers: this.headers });
  }

  //Peticion put para actualizar datos usuario
  updateUsers(user, id): Observable<any> {
    const url_api = `https://my-json-server.typicode.com/volkz/technical-form/users/${id}`;
    return this.http.put(url_api, { headers: this.headers });
  }
}
