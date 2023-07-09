import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { TaskDetailsComponent } from './pages/task-details/task-details.component';

const routes: Routes = [
  { path:"", pathMatch:'full', component:UsersListComponent},
  { path:"tasks/:id", component:TaskDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
