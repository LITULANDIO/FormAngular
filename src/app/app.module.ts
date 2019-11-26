import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//Routes
import { AppRoutingModule } from './app-routing.module';
//Components
import { AppComponent } from './app.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
//Service
import { ApiRestService } from './service/api-rest.service';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateFormComponent,
    EditFormComponent,
    ListUsersComponent,
    HomeComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [ApiRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
