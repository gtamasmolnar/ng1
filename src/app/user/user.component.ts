import { Component, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: User = new User('Jakab', 'Gibsz');

  constructor() {}

  ngOnInit(): void {}

  onActivate() {
    // CODE_HERE
  }
}
