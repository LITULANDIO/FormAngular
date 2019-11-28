import { Component, OnInit } from "@angular/core";
import { ApiRestService } from "../../service/api-rest.service";
import { UsersInterface } from "../../models/usersInterface";
import { ToastrService } from "ngx-toastr";

import { ModalService } from "../_modal";

@Component({
  selector: "app-list-users",
  templateUrl: "./list-users.component.html",
  styleUrls: ["./list-users.component.scss"]
})
export class ListUsersComponent implements OnInit {
  constructor(
    private apiRestService: ApiRestService,
    private modalService: ModalService,
    private toastr: ToastrService
  ) {}
  private users: UsersInterface;

  ngOnInit() {
    this.getListUsers();
  }

  //mostrar todos los usuarios
  getListUsers() {
    this.apiRestService
      .getUsers()
      .subscribe((users: UsersInterface) => (this.users = users));
    this.toastr.success("Peticion get /users Ok!");
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
  //Recuperar datos del usuario
  updateUser(user: UsersInterface): void {
    this.apiRestService.selectedUser = Object.assign({}, user);
  }
}
