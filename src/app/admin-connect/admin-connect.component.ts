import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-connect',
  templateUrl: './admin-connect.component.html',
  styleUrls: ['./admin-connect.component.scss']
})
export class AdminConnectComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }


  identifiant = new FormControl('')
  password = new FormControl('')

  redirectTo(){
    if (this.identifiant.value == 'admin' && this.password.value == 'admin') {
      this.router.navigateByUrl('/admin')
    }
    else{
      alert("Un problème s'est glissé dans votre formulaire, vérifier votre identifiant ou votre mot de passe ! ")
      this.identifiant.reset()
      this.password.reset()
    }
  }
  ngOnInit(): void {
  }
}
