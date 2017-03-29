import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../app.services';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   name:String;
    password:String;
    email:String;

  constructor(
    private validateService:ValidateService,
  private msg: FlashMessagesService){}
  ngOnInit() {
   
  }
  onRegistersubmit(){
    console.log('hiii');
    
  const user={
    name:this.name,
    password:this.password,
    email:this.email
  } 
if(!this.validateService.validateuser(user)) {
this.msg.show("please enter all fields",{cssClass:'alert-danger',timeout:3000});
return false;
 }


      // validateuser(user)
  
    //event.preventDefault();
    
  
  }
}
