import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserdata = {}

  constructor(private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
  }


  registerUser() {
    this.auth.registerUser(this.registerUserdata)

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
