import { Component, OnInit,Inject } from '@angular/core'
import { FormGroup, FormControl, Validators } from "@angular/forms"
import { AuthService } from "./auth.service"
import {Router} from  "@angular/router"
import {TOASTR_TOKEN, Toastr} from "../commons/toastr.service"

@Component({
  templateUrl: "app/user/profile.component.html",
  styles: [`
    em {float:right; color:#E05C65; padding-left:10px; }
    .error input { background-color:#E3C3C5;}
    .error :: -webkit-iput-placeholder {color: #999;}
    .error  ::-moz-placeholder {colo: #999} 
    .error  :-moz-placeholder {colo: #999} 
    .error  :ms-input-placeholder {colo: #999} 
  `]
})
export class ProfileComponent implements OnInit {
  constructor(private authService: AuthService, private router:Router, @Inject(TOASTR_TOKEN) private toastr:Toastr){}
    profileForm: FormGroup
    private firstName: FormControl
    private lastName: FormControl

  ngOnInit(){
    this.firstName = new FormControl(
      this.authService.currentUser.firstName, [Validators.required, 
      Validators.pattern('[a-zA-Z].*')]
    )
    this.lastName = new FormControl(
      this.authService.currentUser.lastName, Validators.required
    )
    this.profileForm = new FormGroup( {
      firstName : this.firstName,
      lastName  :  this.lastName
    })
  }

  saveProfile(formValue){
    if(this.profileForm.valid){
      this.authService.updateCurrentUser(formValue.firstName, formValue.lastName)
      this.toastr.success('Profile Saved!')
    }

  }

  cancel(){
    this.router.navigate(['events'])
  }

  validateLastName(){
    return this.lastName.valid || this.lastName.untouched
  }

  validateFirstName(){
    return this.firstName.valid || this.firstName.untouched
  }
       
}


