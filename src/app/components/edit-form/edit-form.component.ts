import { Component, OnInit } from "@angular/core";
import { ModalService } from "../_modal";
import { ListUsersComponent } from "../../components/list-users/list-users.component";
import { UsersInterface } from "../../models/usersInterface";
import { ApiRestService } from "../../service/api-rest.service";
import { ToastrService } from "ngx-toastr";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-edit-form",
  templateUrl: "./edit-form.component.html",
  styleUrls: ["./edit-form.component.scss"]
})
export class EditFormComponent implements OnInit {
  constructor(
    private modalService: ModalService,
    private apiRestService: ApiRestService,
    private toastr: ToastrService,
  ) {}

  ngOnInit() {}

  closeModal(id: string) {
    this.modalService.close(id);
  }

  // Actualizar datos de usuario
  updateUser(form: NgForm) {
    this.apiRestService
      .updateUsers(this.user, this.apiRestService.selectedUser.id)
      .subscribe(
        response => {
          console.log(response);
          this.user = response.user;
          this.toastr.success("Peticion put /user/id OK!");
          this.modalService.close("custom-modal-2");
        },
        error => {
          console.log(<any>error);
          this.toastr.error("Peticion put /user/id :(");
        }
      );
  }
}
