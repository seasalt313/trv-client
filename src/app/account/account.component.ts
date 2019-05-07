import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  user = {
    name: 'Jane Doe',
    location: 'Germany',
    phone: '555-123-5673',
    birthday: 'March 13, 1990'
  }

  constructor() { }

  ngOnInit() {
  }

}
