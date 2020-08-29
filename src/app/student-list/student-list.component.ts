import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  public student: Student = new Student();
  public studentList: Student[] = [];

  constructor(private _studentservice: StudentService) {
  }

  ngOnInit() {
    this._studentservice.getAllStudents()
      .subscribe(data => { this.studentList = data; },
        error => { console.log(error.message); }
      );
  }

  addStudent() {
    this._studentservice.addStudent(this.student)
      .subscribe(data => {
        this.studentList.push(this.student);
      }, error => {
        console.log(error.message);
      });
  }
}
