import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  userActivated = false;
  private activatedSub: Subscription;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.activatedSub = this.userService.activatedEmitter.subscribe(didActivate => {
      this.userActivated = didActivate;
    });
  }

  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }
}
