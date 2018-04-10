import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CreateComponent } from './component/create/create.component';
import { TodoComponent } from './component/todo/todo.component';
import { DoneComponent } from './component/done/done.component';
import { DeletedComponent } from './component/deleted/deleted.component';
import { NavbarComponent } from './component/navbar/navbar.component';


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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
