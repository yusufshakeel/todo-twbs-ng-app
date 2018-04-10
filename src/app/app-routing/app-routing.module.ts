import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateComponent} from '../component/create/create.component';
import {TodoComponent} from '../component/todo/todo.component';
import {DoneComponent} from '../component/done/done.component';
import {DeletedComponent} from '../component/deleted/deleted.component';

const routes: Routes = [
  {path: '', component: CreateComponent},
  {path: 'new', component: CreateComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'done', component: DoneComponent},
  {path: 'deleted', component: DeletedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
