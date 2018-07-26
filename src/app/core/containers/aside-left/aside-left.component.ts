import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from "@angular/animations";
import { User } from "../../../auth/models/user";

@Component({
  selector: 'app-aside-left',
  templateUrl: './aside-left.component.html',
  styleUrls: ['./aside-left.component.styl'],
  animations: [
    trigger('asideCollapse', [
      state('close', style({
        width: "50px"        
      })),
      state('open', style({
        width: "300px"
      })),
      transition('open => close', animate('100ms ease-out')),
      transition('close => open', animate('100ms ease-in'))
    ])
  ]
})
export class AsideLeftComponent implements OnInit {

  @Input() asideState:string;
  user: User;

  constructor() { }

  ngOnInit() {
    this.user = {
      name: "usuario",
      lastname: "prueba",
      username: "pruebaUser",
      email: "usuario@prueba.com",
      urlImage: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
    }
  }

}
