import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  authData: any;
  isShow = true;
  constructor(private router: Router) {

    const name = localStorage.getItem('login');
    console.log(name)
    if (name) {
      this.isShow = false;
    }
    else{
      this.isShow = true;
    }

  }
  Logout() {
    this.router.navigateByUrl('/login');
    localStorage.clear();
  }
}
