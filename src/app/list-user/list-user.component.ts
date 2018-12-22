import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from 'src/model/user.model';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
users: User[];
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    if(localStorage.getItem("username")!=null)
    {
      this.userService.getUsers().subscribe(data=>
        {
          this.users=data;
        }
        );
    }
    else{
      this.router.navigate(['/login'])
    }

  }

logOutUser(): void
{
  if(localStorage.getItem("username")!=null)
  {
    localStorage.removeItem("username");
    this.router.navigate(['/login']);

  }
}

//Delete User
deleteUser(user: User):void
{
let result=confirm("Do you want to delete this user?")
if(result)
{
  this.userService.deleteUser(user.id).subscribe(data=>
    {
      this.users=this.users.filter(u=>u!==user);
    }
    
    
    )
}
}

//Modify User
editUser(user: User):void
{
localStorage.removeItem("editUserId");
localStorage.setItem("editUserId",user.id.toString());
this.router.navigate(['edit-user']);
}

//Add User
addUser():void
{
  this.router.navigate(['add-user']);
}



}
