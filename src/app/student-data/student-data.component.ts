import { Component } from '@angular/core';
import { StudentsService } from '../Services/students.service';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent {
 public students:any;
  constructor(private std:StudentsService){
      this.students = std.getStudent();
  }
}
