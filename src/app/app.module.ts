import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CreateComponent } from './component/create/create.component';
import { TodoComponent } from './component/todo/todo.component';
import { DoneComponent } from './component/done/done.component';
import { DeletedComponent } from './component/deleted/deleted.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { TodoService} from './service/todo.service';
import { DoneService} from './service/done.service';
import { DeletedService} from './service/deleted.service';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    TodoComponent,
    DoneComponent,
    DeletedComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    TodoService,
    DoneService,
    DeletedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
