import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { fakeAsync } from '@angular/core/testing';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addForm: FormGroup;
  submitted: boolean=false;
 
  constructor(private formBuilder: FormBuilder, private router:Router, private userService:UserService) { }

  
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id:[],
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      email:['', Validators.required,Validators.email],


    })
  }

  onSubmit(){
    this.submitted=true;
    if(this.addForm.invalid)
    {
      return;

    }
    this.userService.createUser(this.addForm.value).subscribe(data=>
    {
      this.router.navigate(['list-user']);
    }
    
    )


  }



}
