import { Component } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms'
import { FireauthService } from '../services/fireauth.service';
import { FirestorageService } from '../services/firestorage.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  user:any=null;
  signinform!:FormGroup;

  constructor(private firestorestorageservice:FirestorageService,private fb:FormBuilder,private authservice:FireauthService,private router:Router,public fbAuth: AngularFireAuth){
    this.signinform=fb.group({  
      uname:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required]),
      confirmpass:new FormControl('',[Validators.required])
    })
  }

  signin()
  {
    if(this.signinform.value.password!=this.signinform.value.confirmpass)
    {
      alert('password and confirmpassword must be same');
    }else{
    const user={email:this.signinform.value.email,pass:this.signinform.value.password} 
    this.authservice.regwithemailandpass(user).then((res:any)=>{
      alert("signin");
    this.firestorestorageservice.createuser(this.signinform.value.email,this.signinform.value.uname);
    this.router.navigateByUrl('home');
  }).catch((err:any)=>{
    console.log(err);
    })
  }
}

}
