import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-nav-app',
  templateUrl: './top-nav-app.component.html',
  styleUrls: ['./top-nav-app.component.styl']
})
export class TopNavAppComponent implements OnInit {

  @Output() actionAside = new EventEmitter<string>();
  state: string;

  constructor() { 
    this.state = 'open';
  }

  ngOnInit() {
  }

  closeAside() {
    this.state = (this.state === 'close') ? 'open' : 'close';
    this.actionAside.emit(this.state);
  }

}
