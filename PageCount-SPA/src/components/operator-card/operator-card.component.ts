import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../_models/User';

@Component({
  selector: 'app-operator-card',
  templateUrl: './operator-card.component.html',
  styleUrls: ['./operator-card.component.css']
})
export class OperatorCardComponent implements OnInit {
@Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}
