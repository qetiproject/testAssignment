import { Component, Input, OnInit } from '@angular/core';
import { UserView } from '../../models/user';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css'],
})
export class UserListItemComponent implements OnInit {
  @Input()
  item!: UserView;

  constructor() {}

  ngOnInit() {}
}
