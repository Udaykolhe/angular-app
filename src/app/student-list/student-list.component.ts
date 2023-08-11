import { Component } from '@angular/core';
import { StudentsService } from '../Services/students.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
public students:any;

  constructor(private std:StudentsService){
      this.students=std.getStudent();
  }
}
