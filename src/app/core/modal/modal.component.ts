import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() show = false;
  constructor() { }

  ngOnInit() {
  }

}
@Component({
  selector: 'app-modal-header',
  template:`<ng-content></ng-content>`,
  styleUrls: ['./modal.component.scss']
})
export class ModalHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-modal-body',
  template:`<ng-content></ng-content>`,
  styleUrls: ['./modal.component.scss']
})
export class ModalBodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
@Component({
  selector: 'app-modal-footer',
  template:`<ng-content></ng-content>`,
  styleUrls: ['./modal.component.scss']
})
export class ModalFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}