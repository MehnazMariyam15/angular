import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm:FormGroup
  invalidLogin: boolean

  constructor(private formBuild:FormBuilder,private authService:AuthServiceService,private router:Router){ }

  ngOnInit() {
    
    this.loginForm = this.formBuild.group({
      userId: ['',[
        Validators.required
      ]],
      password: ['',[
        Validators.required
      ]]
    })
  }
  get userId(){
    return this.loginForm.get('userId');
  }
  get password(){
    return this.loginForm.get('password');
  }
  toSignupUser() {
    this.router.navigate(['/signup','U'])
  }
  toSignupAdmin() {
    this.router.navigate(['/signup','A'])
  }
}
