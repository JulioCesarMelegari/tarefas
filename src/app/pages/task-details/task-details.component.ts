import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  public displayedColumns = ['id', 'name', 'description', 'completed'];

  public selecterUserId!: number;
  public userService = inject(UserService);
  public taskService = inject(TaskService);

  public route = inject(ActivatedRoute);
  public router = inject(Router);

  public userTasks = this.taskService.userTasks;

  ngOnInit(): void {
    this.selecterUserId = +this.route.snapshot.paramMap.get('id')!;

    if(this.selecterUserId){
      this.userService.setSelectedUserId(this.selecterUserId);
    }else{
      this.router.navigateByUrl('/');
    }
  }

}
