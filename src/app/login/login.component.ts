import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username="Tawabullah";
  password="123";
  constructor(private router:Router){
const name=localStorage.getItem('login');
    if(name !==null){
      this.router.navigateByUrl('dashboard');
    }
  }
  LoginToDashboard(form:any){
    if (form.username === this.username && form.password === this.password) {
      localStorage.setItem('login',JSON.stringify(this.username));
      this.router.navigateByUrl('/dashboard');
    } else {
      alert('Please enter correct username and password');
    }
  }
}
