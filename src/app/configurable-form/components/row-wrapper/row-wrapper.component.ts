import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'row-wrapper',
  templateUrl: './row-wrapper.component.html',
  styleUrls: ['./row-wrapper.component.scss']
})
export class RowWrapperComponent implements OnInit {
  selected = false;
  constructor() { }

  ngOnInit() {
  }

  troggle() {
    this.selected = !this.selected;
  }
}
