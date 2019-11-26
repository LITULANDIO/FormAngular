import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  constructor(private http: HttpClient) { }


getUsers(){
  const url_api = 'https://my-json-server.typicode.com/volkz/technical-form/users';
  return this.http.get(url_api);
}


}
