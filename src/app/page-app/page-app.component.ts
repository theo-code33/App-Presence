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
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get('http://localhost:3000/students').subscribe(data =>{
      console.log(data)
      this.dataStudents = data
    })
    setInterval(() => {
      this.myDate = new Date()
      console.log(this.myDate)

    }, 1000)
    
  };
  

}
