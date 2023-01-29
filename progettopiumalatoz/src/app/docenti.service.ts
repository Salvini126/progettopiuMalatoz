import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { flaskLink } from './flaskLink';

@Injectable({
  providedIn: 'root'
})
export class DocentiService {
  linkFlask = flaskLink.getUrl();
  constructor(private http :HttpClient) { }

  public getData(){
    return this.http.get(this.linkFlask +"Docenti");
  }
}
