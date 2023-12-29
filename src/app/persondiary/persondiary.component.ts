import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirestorageService } from '../services/firestorage.service';
import { AngularFireAuth } from '@angular/fire/compat/auth' ; 
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-persondiary',
  templateUrl: './persondiary.component.html',
  styleUrls: ['./persondiary.component.css']
})
export class PersondiaryComponent { 
  email:any;
  diary:any;
  personaldiary:any=[];
  user:any;
  moneyaddform!:FormGroup;
  totalmoney:number=0;

  constructor(private fb:FormBuilder,private auth:AngularFireAuth,private route: ActivatedRoute,private storage:FirestorageService) {
    this.moneyaddform=fb.group({
      money:new FormControl('',[Validators.required]),
      description:new FormControl('',[Validators.required])
    })

    this.email=this.route.snapshot.paramMap.get('email'); 
    
    this.auth.authState.subscribe((user1)=>{  
      this.user=user1?.email;  
      this.storage.getdiary(this.user).subscribe((doc)=>{  
        doc.docs.forEach(ele=>{    
        if(ele.id==this.user)
        { 
          this.diary=ele.data(); 
          this.personaldiary=this.diary.diary; 
          this.totalmoney=this.personaldiary[this.email].reduce((acc:any,cval:any)=>{return acc+cval.money},0)
        } 
      }) 
    })
  })

  }

  addmoney()
  {
    let data=this.moneyaddform.value;
    this.moneyaddform.reset();
    this.personaldiary[this.email].push(data);
    this.totalmoney+=data.money;

    
    // alert(JSON.stringify(this.personaldiary))
    this.storage.updatedoc(this.user,this.personaldiary).then((ok)=>{

      this.storage.getuserhistory(this.user).subscribe((history)=>{
        let temphis:any=history.data();

        let newhis={person:this.email,description:data.description,money:data.money};

        console.log(temphis)

        if(temphis.history==undefined)temphis.history=[];

        temphis.history.push(newhis);
        this.storage.addintohistory(this.user,temphis.history).then((ok)=>{
          // alert("ok");
        }).catch((err)=>{
          alert("err");
        })

      })


      // alert("added");
    }).catch((err)=>{
      alert("err")
    });
  }

  delete(i:number)
  { 
    this.totalmoney-=this.personaldiary[this.email][i].money;
    this.personaldiary[this.email].splice(i,1); 

    this.storage.updatedoc(this.user,this.personaldiary).then((ok)=>{
      // alert("Updated");
    }).catch((err)=>{
      alert("err")
    });
  }

}
