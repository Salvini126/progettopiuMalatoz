import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Docenti } from '../models/doc.ver';
import { AppSettings } from '../appSetting';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Nome: string = '';
  Cognome: string= '';
  email: string= '';
  password: string= '';
  errorMessage: string= '';
  successMessage: string= '';
  obsReg: Observable<Docenti[]> = undefined!;
  data: any = undefined!;


  constructor(private http: HttpClient, public router: Router) { }

  private baseUrlPrin = AppSettings._API;

  ngOnInit(): void {
    

  }


  register() {
    this.http.post( this.baseUrlPrin + 'register',{ Nome: this.Nome, Cognome: this.Cognome, email: this.email, password: this.password }).subscribe(
      data => {
        console.log(data);
        if (data.hasOwnProperty('error')) {
          this.errorMessage = "Error: Invalid Informations!!";
        } else {
          this.successMessage = "You have successfully Registerd!";
          localStorage.setItem('user', JSON.stringify(data));
          this.router.navigate(['/login']);
        }
      },
      error => {
        console.log(error);
        this.errorMessage = "Error: Invalid Informations!!";
      }
    );
  }
}
