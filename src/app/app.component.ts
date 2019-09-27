import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular7';
  rows = [];
 
  ngOnInit() {
    this.fetch((data) => {
      this.rows = data;
    });
  }
 
  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `http://swimlane.github.io/ngx-datatable/assets/data/company.json`);
 
    req.onload = () => {
      const data = JSON.parse(req.response);
      cb(data);
    };
 
    req.send();
  }
}
