import { Component, OnInit } from '@angular/core';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';


@Component({
  selector: 'app-planification',
  templateUrl: './planification.component.html',
  styleUrls: ['./planification.component.scss']
})
export class PlanificationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cities2 = [
    {id: 1, name: 'JAVA'},
    {id: 2, name: '.NET'},
    {id: 3, name: 'ANGULAR', disabled: true},
    {id: 4, name: 'PHP'},
    {id: 5, name: 'KOTLIN'}
  ];
  
}