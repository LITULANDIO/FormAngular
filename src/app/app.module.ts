import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from './components/_modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//Routes
import { AppRoutingModule } from './app-routing.module';
//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { ListUsersComponent } from './components/list-users/list-users.component';

//Service
import { ApiRestService } from './service/api-rest.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateFormComponent,
    EditFormComponent,
    ListUsersComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ModalModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ApiRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
