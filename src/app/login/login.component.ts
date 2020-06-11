import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginUserdata = {}

  constructor(private _auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }




  LoginUser() {
    this._auth.LoginUser(this.LoginUserdata)
      .subscribe(
        res =>{
          console.log(res)
          localStorage.setItem('token', res.token)
          this.router.navigate(['/user'])

        },
        err => console.log(err)
      )
  }

}
