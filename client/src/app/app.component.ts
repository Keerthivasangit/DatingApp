import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Datting App';
  users: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
      this.getusers();
  }

  getusers()
  {
    this.http.get('https://localhost:5001/api/Users').subscribe(next => {
      this.users = next;
    },
    error => {
      console.log(error);
    });
  }


}
