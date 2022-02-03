import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  // récupération des valeurs des inputs
  select = new FormControl('')
  nom = new FormControl('')
  prenom = new FormControl('')

  classes: any[] = [
    {value: 'B1-dev-web', viewValue: 'B1 Développeur Web'},
    {value: 'B1-cpd', viewValue: 'B1 Chargé de Projet'},
    {value: 'B2-cpd', viewValue: 'B2 Chargé de Projet'},
  ];

  // intégrer les valeurs des input sous forme de tableau dans une variable student
  students : any[] =[]
  nameStudent!:any
  postValue() {
    if(this.select.value == ''){
      alert('Choisissez votre classe')
      return
    }else if(this.nom.value == ''){
      alert('taper votre nom')
      return
    }else if(this.prenom.value == ''){
      alert('taper votre prénom')
      return
    }
    console.log(this.select.value);
    this.http.post('http://localhost:3000/', {
      class: this.select.value,
      nom: this.nom.value,
      prenom: this.prenom.value
    }).subscribe((loginResult: any) =>{
      localStorage.setItem('id', loginResult.id)
      this.router.navigateByUrl("/app")
    })
  }

  changeTo() {
    this.http.get('http://localhost:3000/students').subscribe(data=>{
      console.log(data)
      this.nameStudent = data
      this.router.navigateByUrl("/admin-connect")
    })
  }

  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
  }

}
