import { Component, SimpleChange, SimpleChanges } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth' ; 
import { FirestorageService } from '../services/firestorage.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent {
  user:any;
  diary:any=null;
  keys:any=[];
  diarypeopleform!:FormGroup;

  constructor(private fb:FormBuilder, private auth:AngularFireAuth,private storage:FirestorageService){
    // alert("as");
    this.diarypeopleform=fb.group({name:new FormControl('',[Validators.required])});
    this.auth.authState.subscribe((user1)=>{  
      this.user=user1?.email; 
      this.storage.getdiary(this.user).subscribe((doc)=>{ 
        doc.docs.forEach(ele=>{ 
          if(ele.id==this.user)
          {  
            this.diary=ele.data();
            
            for(let t in this.diary.diary)
            { 
              this.keys.push(t);
            } 
          } 
        }) 
      })  
     })
  }

  addpeople()
  {
    // alert(JSON.stringify(this.diarypeopleform.value));
    let datatoadd=this.diarypeopleform.value;
    this.storage.getuserdiary(this.user).subscribe((data:any)=>{
      // alert(JSON.stringify(data.data()))
      let temp=data.data().diary; 
      temp[this.diarypeopleform.value.name]=[];

      this.storage.updatedoc(this.user,temp).then((ok)=>{
        
        this.storage.getdiary(this.user).subscribe((doc)=>{ 
          doc.docs.forEach(ele=>{ 
            if(ele.id==this.user)
            {  
              // alert(JSON.stringify(ele.data()));
              this.diary=ele.data();
              this.keys=[];
              
              for(let t in this.diary.diary)
              { 
                this.keys.push(t);
              } 
            } 
          }) 
        })

      }).catch((err)=>{
        alert("err");
      })
    })
  }

  ngAfterContentInit()
  {
   alert("after content init");
  }

  ngAfterContentChecked()
  {
   console.log("checked");
  }

  ngDoCheck()
  {
    console.log("docheck");
  }

}
