import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  animations: [ ]
})
export class LoadingComponent {
  numbers = new Array(6);
  @Input() loading: boolean;
  constructor() { }

  ngOnInit() { }

}
