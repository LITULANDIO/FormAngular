import { Component, OnInit } from "@angular/core";
import { ModalService } from "../_modal";
import { ApiRestService } from "../../service/api-rest.service";
import { UsersInterface } from "../../models/usersInterface";
import { ListUsersComponent } from "../../components/list-users/list-users.component";
import { ToastrService } from "ngx-toastr";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-create-form",
  templateUrl: "./create-form.component.html",
  styleUrls: ["./create-form.component.scss"]
})
export class CreateFormComponent implements OnInit {
  public user: UsersInterface = {
    id: null,
    name: "",
    surname: "",
    identification: "",
    document_type: "",
    gender: "",
    email: "",
    password: ""
  };

  constructor(
    private modalService: ModalService,
    private apiRestService: ApiRestService,
    private listUsers: ListUsersComponent,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  closeModal(id: string) {
    this.modalService.close(id);
  }

  // Guardar usuario
  saveUser(form: NgForm) {
    this.apiRestService.createUsers(this.user).subscribe(
      response => {
        console.log(response);
        this.toastr.success("Peticion post /user OK!");
        this.modalService.close("custom-modal-1");
        form.resetForm();
      },
      error => {
        console.log(<any>error);
        this.toastr.error("Peticion post /user :(");
      }
    );
  }
}
