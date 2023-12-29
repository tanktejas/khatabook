import { Component } from '@angular/core'; 
import { FireauthService } from '../services/fireauth.service';
import { getAuth } from "firebase/auth";
import { AngularFireAuth } from '@angular/fire/compat/auth'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  auth1:any ;
  user:any=null;
  
  constructor(private auth:FireauthService,public fbAuth: AngularFireAuth)
  { 
      this.fbAuth.authState.subscribe((user1)=>{ 
      this.user=user1?.email; 
     })
  }

  ngOnInit()
  {
    // this.auth1=getAuth();
    // this.user = this.auth1.currentUser; 
    // alert(this.user.email) 
  }

  logout()
  {
    this.auth.logout().then((res:any)=>{
      // alert("logged out");
      console.log(res);
    }).catch((err:any)=>{
      alert("error while logging out");
      console.log(err);
    })
  }

}
