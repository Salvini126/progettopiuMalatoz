import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-comp-ver',
  templateUrl: './comp-ver.component.html',
  styleUrls: ['./comp-ver.component.css']
})
export class CompVerComponent {
  query: string | undefined;
  title = 'first-routed-app';
  obsTrack: Observable<Object> | undefined;
  results: any;
  submit(query: HTMLInputElement): void {}
}

