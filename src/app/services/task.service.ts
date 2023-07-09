import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { UserService } from 'src/app/services/user.service';
import { Task } from '../models/task.model';
import { switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public http = inject(HttpClient);
  public userService = inject(UserService);
  public usersUrl = 'http://localhost:3000/users';
  public tasksUrl = 'http://localhost:3000/tasks';

  public userTasks = signal<Task[]>([]);

  private usersTasks$ = toObservable(this.userService.selectedUserId).pipe(
    switchMap((userId) =>
      this.http.get<Task[]>(`${this.tasksUrl}?userId=${userId}`)
              .pipe(tap((tasks) =>{
                this.userTasks.set(tasks);
              }))
    )
  );

  public readOnlyUserTasks = toSignal(this.usersTasks$, {
    initialValue: [] as Task[],
  });


}
