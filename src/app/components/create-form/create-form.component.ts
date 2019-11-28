import { Component, OnInit } from '@angular/core';
import { ModalService } from '../_modal';
import { ApiRestService } from '../../service/api-rest.service';
import { UsersInterface } from '../../models/usersInterface';
import { ListUsersComponent } from '../../components/list-users/list-users.component';


@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {

  user: UsersInterface = {
    id: null,
    name: '',
    surname: '',
    identification: '',
    document_type: '',
    gender: '',
    email: '',
    password: ''
  }

  constructor(private modalService: ModalService, private apiRestService: ApiRestService, private listUsers: ListUsersComponent) { }

  ngOnInit() {
    this.listUsers.getListUsers();
    
  }

  closeModal(id: string) {
    this.modalService.close(id);
}

// Guardar usuario
saveUser(form){
this.apiRestService.createUsers(this.user).subscribe(
  response => {
    console.log(response)
    this.user = response.user;
  },
  error =>{
    console.log(<any>error);
  }
)

  
}

}
