import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addtolist',
  templateUrl: './addtolist.component.html',
  styleUrls: ['./addtolist.component.sass']
})
export class AddtolistComponent implements OnInit {

  constructor() { }
  @Output() submit: EventEmitter<string> = new EventEmitter()
  changeTitle(newTitle: string): void {
    this.submit.emit(newTitle);
  }
  ngOnInit(): void {
  }

}
