import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';

const routes: Routes = [
  {path: '', component: UsersListComponent},
  {path: 'form', component: UserFormComponent},
  {path: 'form/:id', component: UserFormComponent},
  {path: 'data-binding', component:DataBindingComponent},
  {path: 'todo', component:TodoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
