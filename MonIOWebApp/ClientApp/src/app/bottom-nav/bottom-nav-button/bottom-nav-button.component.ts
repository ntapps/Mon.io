import { Component, OnInit, Input } from '@angular/core';
import { ButtonObject } from '../bottom-nav.component';

@Component({
  selector: 'bottom-nav-button',
  templateUrl: './bottom-nav-button.component.html',
  styleUrls: ['./bottom-nav-button.component.scss']
})
export class BottomNavButtonComponent implements OnInit {

  @Input() index = 0;
  @Input() buttonObj : ButtonObject;

  constructor() { }

  ngOnInit() {
  }

}
