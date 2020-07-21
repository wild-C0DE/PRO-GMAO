import { Component } from '@angular/core';
//siw 
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './_models';
// end siw



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GMAO';
  //siw
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
}

logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}
//end siw
}
