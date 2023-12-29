import { Component, ElementRef, ViewChild } from '@angular/core';
import { FireauthService } from '../services/fireauth.service';
import { getAuth } from "firebase/auth";
import { AngularFireAuth } from '@angular/fire/compat/auth'  
import { fromEvent } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   auth1:any;
   user:any;
   @ViewChild('btns') btns!:ElementRef;
 
   services:any[]=[{name:"Account Management",spec:["Here you can manage different people account easily.","Manage your diary and stay mistake free with khataBook.","you can see history of all transaction with different people."]}, {name:"Money Management",spec:["Here you can manage your money wisely.","Create your own Khatabook account and register record."]}]


   constructor(private auth:FireauthService,public fbAuth: AngularFireAuth)
   {  
    // this.serr=new ParService(); 
     this.fbAuth.authState.subscribe((user1)=>{  
      this.user=user1?.email; 
     })
    //  alert("const")
   }

   ngAfterViewInit()
   {
    // form fromEvent of rxjs
    fromEvent(this.btns.nativeElement,'click').subscribe((ok)=>{
      console.log(ok);
    })
   } 

   ngOnInit()
   {
    // alert("ngoninit")
    //  this.user = this.auth1.currentUser; 
    //  alert(JSON.stringify(this.auth.getuser().then((res)=>{alert(res)}))) 
   }   

}
