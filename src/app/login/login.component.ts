import { Component } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms'
import { FireauthService } from '../services/fireauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginform!:FormGroup;

  constructor(private fb:FormBuilder,private auth:FireauthService,private router:Router){
    this.loginform=fb.group({
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
    })
  }

  loginwithgoogle()
  {
    this.auth.signinwithgoogle().then((res:any)=>{
      this.router.navigateByUrl('home');
    })
  }

  login()
  { 
    const user={email:this.loginform.value.email,pass:this.loginform.value.password};
    this.auth.signinwithemailandpass(user).then((res:any)=>{
      alert("success");
      this.router.navigateByUrl('home');
    }).catch((err:any)=>{
      alert("error");
      console.log(err);
    })
  }
}
