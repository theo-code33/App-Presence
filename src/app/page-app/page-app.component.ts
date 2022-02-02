import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  stop : any

  constructor(private http: HttpClient,private router: Router) { }

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
    
    this.stop = setInterval(() => {
      this.myDate = new Date()
        this.timeRest = new Date()
        this.timeRest.setHours(this.timeRest.getHours() + 1)
        this.timeRest.setMinutes(0)
        this.myDate.setMinutes(59)
        this.timeRest.setMinutes(0)
        this.timeRest.setSeconds(0)
        this.countDown = this.timeRest - this.myDate
        this.countDown = this.countDown / 1000
        console.log(this.countDown);
        console.log(this.countDown);
      if(this.countDown <= 1){
        this.router.navigateByUrl('/end')
        clearInterval(this.stop)
        return
        }
    }, 1000)
    console.log(this.timeRest);
    
    
  };
}
