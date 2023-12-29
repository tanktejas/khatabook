import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { DiaryComponent } from './diary/diary.component';
import { PersondiaryComponent } from './persondiary/persondiary.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
{
   path:'', 
   redirectTo:"home",
   pathMatch:"full"
},
  {  
  path:'home',
  component:HomeComponent
},
{  
  path:'diary',
  component:DiaryComponent,
  pathMatch:"full"
},
{  
  path:'diary/:email',
  component:PersondiaryComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'signin',
  component:SigninComponent
},
{
  path:'history',
  component:HistoryComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
