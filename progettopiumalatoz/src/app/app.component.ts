import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DocentiService } from './docenti.service';
import { flaskLink } from './flaskLink';
import { Docenti, Verifiche } from './models/doc.ver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'progettopiumalatoz';
  linkFlask = flaskLink.getUrl();

  dataFrame: Observable<Verifiche[]>| undefined;
  dati:Verifiche[] = undefined!;

  dataFrame1: Observable<Docenti[]>| undefined;
  dati1:Docenti[] = undefined!;

  constructor(private DOC : DocentiService, private http: HttpClient){
  }
  
  getDatas(doc: HTMLInputElement){
    let n = doc.value;
    this.dataFrame1 = this.http.get<Docenti[]>(this.linkFlask +"/Docenti");
    this.dataFrame1.subscribe(this.fati1)
  }
  fati1 = (dataa: Docenti[]) => {
    this.dati1 = dataa;
    console.log(dataa);
  }

  getStadi(VER: HTMLInputElement){
    let n = VER.value;
    this.dataFrame = this.http.get<Verifiche[]>(this.linkFlask +"/Verifiche");
    this.dataFrame.subscribe(this.fati)
  }

  fati = (data: Verifiche[]) => {
    this.dati = data;
    console.log(data);
  }

  
}

