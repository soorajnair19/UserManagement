import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from 'src/model/user.model';
import {first} from 'rxjs/operators'

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  editForm: FormGroup;
  submitted: boolean = false;
  user: User;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit() {
    if (localStorage.getItem("username") != null) {
      let userId = localStorage.getItem("editUserId");
      if (!userId) {
        alert('Invalid Action');
        this.router.navigate(['list-user']);
        return;
      }
      this.editForm = this.formBuilder.group({
        id: [],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required],


      });

      this.userService.getUsersById(+userId).subscribe(data => {
        this.editForm.setValue(data);
      });
    }
      else
      {
        this.router.navigate(['/login']);
      }


  }

  onSubmit() {
    this.submitted = true;
    if (this.editForm.invalid) {
      return;

    }
    this.userService.updateUser(this.editForm.value).pipe(first())
    .subscribe(data => {
      this.router.navigate(['list-user']);
    }, error => { 
      alert(error);
    }

    )


  }

  


}
