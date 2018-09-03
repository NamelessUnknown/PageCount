import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../../_models/User';
import { UserService } from '../../_services/user.service';
import { AlertifyService } from '../../_services/alertify.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css'],
  
})
export class OperatorsComponent implements OnInit {
@Output() cancelOperators = new EventEmitter();

clue: string;
model: any;
users: User[];

constructor(private userService: UserService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
  //   this.route.data.subscribe(data => {
  //     this.users = data['users'];
  //   });
  this.loadUsers();
  }

  loadUsers(){
    this.userService.getUsers().subscribe((users:User[]) =>{
      this.users = users
    }), error => {
      this.alertify.error(error);
    }
  }

  cancel() {
    this.cancelOperators.emit(false);
  }

}
