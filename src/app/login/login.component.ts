import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    model: any = {};
    loading: boolean = false;
    constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
      document.body.classList.add('login-body');
  }

  login = (f: NgForm) => {
      if (f.valid) {
          let that = this;
          this.loading = true;
          this.authService.login(this.model.username, this.model.password).subscribe(
              data => {
                  this.authService
                  this.router.navigate(['/dashboard', 'main']);      
              }, error => {
                  this.loading = false;
          });
      }
  }

  ngOnDestroy() {
      document.body.classList.remove('login-body');
  }
}
