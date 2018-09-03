import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent implements OnInit {

  pageCountMode = false;
  operatorsMode = false;
  resultsMode = false;

  constructor() { }

  ngOnInit() {
    
  }

  pageCountFormToggle() {
    this.pageCountMode = true;
  }
  cancelPageCountMode(pageCountMode:boolean){
    this.pageCountMode = pageCountMode;
  }

  operatorsToggle() {
    this.operatorsMode = true;
  }
  cancelOperatorsMode(operatorsMode: boolean) {
    this.operatorsMode = operatorsMode;
  }

  resultsToggle() {
    this.resultsMode = true;
  }

  cancelResultsMode(resultsMode: boolean){
    this.resultsMode = resultsMode;
  }

}
