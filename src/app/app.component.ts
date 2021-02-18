import { Component } from '@angular/core';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'less8dzPipesAndDirectives';
  users: any[];
  num = 12345.67890987;
  dates = new Date().getTime();

  constructor(private userService: UserService) {
  userService.users()
    .subscribe(users => this.users = users);
  }
}
