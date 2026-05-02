import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  standalone: false
})
export class ContactsComponent implements OnInit {
  title = 'helloemryon@gmail.com';
  constructor() { }

  ngOnInit() {
  }

}
