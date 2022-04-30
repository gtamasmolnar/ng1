import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: User = new User('Jakab', 'Gibsz');

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onActivate() {
    this.userService.activatedEmitter.next(true);
  }
}
