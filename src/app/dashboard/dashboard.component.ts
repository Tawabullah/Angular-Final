import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  authData: any;
  name: any;
  constructor(private router: Router) {
    this.name = localStorage.getItem('login');
    if (this.name !== null) {
      this.router.navigateByUrl('dashboard');
    }
    else {
      this.router.navigateByUrl('login');

    }

  }

}
