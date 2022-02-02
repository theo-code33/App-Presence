import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-app',
  templateUrl: './page-app.component.html',
  styleUrls: ['./page-app.component.scss']
})
export class PageAppComponent implements OnInit {

  dataStudents!:any
  myDate : any;
  timeRest : any;
  countDown : any;
  studentById : any

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const localId = localStorage.getItem('id');
    this.http.get('http://localhost:3000/students').subscribe((data) =>{
      console.log(data)
      this.dataStudents = data
    })
    this.http.get('http://localhost:3000/student-by-id/'+ localId).subscribe((student: any) => {
      console.log(student);
      this.studentById = student
      
    })
    setInterval(() => {
      this.myDate = new Date()
      if(this.countDown <= 1){
        alert('le cours est fini')
      }else{
        this.timeRest = new Date()
        this.timeRest.setHours(this.timeRest.getHours() + 1)
        this.timeRest.setMinutes(0)
        this.timeRest.setSeconds(0)
        this.countDown = this.timeRest - this.myDate
        this.countDown = this.countDown / 1000
      }
    }, 1000)
  };
}
