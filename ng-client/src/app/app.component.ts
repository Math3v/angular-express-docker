import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  users$: Observable<any>;

  constructor(
    private http: Http
  ) {}

  ngOnInit() {
    this.users$ = this.http.get('http://localhost:3000/users').map(res => res.json());
  }
}
