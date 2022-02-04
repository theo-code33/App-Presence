import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jsPDF } from 'jspdf';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.scss']
})
export class PageAdminComponent implements OnInit {

  nameStudent!:any
  idStudent!:any
  table!:any

  select = new FormControl('')

  classes: any[] = [
    {value: 'B1-developpeur-web', viewValue: 'B1 Développeur Web'},
    {value: 'B1-charge-projet-digital', viewValue: 'B1 Chargé de Projet'},
    {value: 'B2-charge-projet-digital', viewValue: 'B2 Chargé de Projet'},
    {value: 'All-classes', viewValue: 'All Classes'}
  ];

  constructor(private http: HttpClient, private router: Router ) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/students').subscribe(data=>{
      console.log(data)
      this.nameStudent = data
    })


  }
  returnTo(){
    this.router.navigateByUrl("/connexion")
  }

  change(){
    this.http.get('http://localhost:3000/find-by-class-name/' + this.select.value).subscribe(data=>{
      console.log(data)
      this.nameStudent = data
    })
  }

  downloadPdf(){
    let doc = new jsPDF({});
    console.log(this.nameStudent)
    let indexX = 50
    let indexY = 50
    let indexX2 = 120
    doc.setTextColor('#7B61FF')
    doc.text('Les élèves présents dans votre cours : ', 50, 15)
    doc.text('Prénom :',50, 40)
    doc.text('Nom :', 120, 40)
    this.nameStudent.forEach((name:any)=> {
      console.log(name)
      doc.setTextColor('#000')
      doc.text(name.prenom, indexX, indexY)
      doc.text(name.nom, indexX2, indexY)
      indexY += 10
    });

    doc.save('studentTable.pdf')
  }
}

