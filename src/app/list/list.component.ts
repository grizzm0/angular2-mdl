import { Component } from '@angular/core';
import { flyInOutTrigger } from './../animations/flyInOutTrigger-animation';
import { hostConfig } from './../animations/flyInOutTrigger-animation';

@Component({
  moduleId: module.id,
  selector: 'list-demo',
  host: hostConfig,
  animations: [
    flyInOutTrigger
  ],
  templateUrl: 'list.component.html',
  styles: [
`
  mdl-list {
    width: 300px;
  }
  
  mdl-radio, mdl-checkbox, mdl-switch {
    display: inline;
  }
`
  ]
})
export class ListDemo {}