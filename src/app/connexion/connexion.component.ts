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
  nom = new FormControl('')
  prenom = new FormControl('')

  // intégrer les valeurs des input sous forme de tableau dans une variable student
  students : any[] =[]
  
  postValue() {
    if(this.nom.value == ''){
      alert('taper votre nom')
    }else if(this.prenom.value == ''){
      alert('taper votre prénom')
    }else{
      this.students.push({
        nom: this.nom.value,
        prenom: this.prenom.value
      })
      this.nom.reset()
      this.prenom.reset()
    }
    console.log(this.nom.value);
    console.log(this.students);
    this.http.post('http://localhost:3000', this.students).subscribe(
      // () =>{
      // Ajouter valeur de redirection
      // this.router.navigateByUrl('/')
    // }
    )
    return this.students
  }

  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
  }

}
