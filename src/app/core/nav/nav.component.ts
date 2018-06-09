import { NavItem } from './nav-item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() navItems: NavItem[] = [];
  constructor() { }

  ngOnInit() {
  }

}