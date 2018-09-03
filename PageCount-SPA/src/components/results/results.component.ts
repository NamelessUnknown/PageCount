import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ResultService } from '../../_services/result.service';
import { Result } from '../../_models/Result';
import { AlertifyService } from '../../_services/alertify.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
@Output() cancelResults = new EventEmitter();
results: Result[];
//Charts:
AvgPagesChart:any;
AvgAssociationsChart:any;
AvgAds:any;
AvgAdsTime:any;


  constructor(private resultService: ResultService, private alertify: AlertifyService) { }

  ngOnInit() {
    // this.loadResults();
    // this.avgPages();
  }

  loadResults(){
    this.resultService.getResults().subscribe((results:Result[]) =>{
      this.results = results
    }), error => {
      this.alertify.error(error);
    }
  }

  cancel() {
    this.cancelResults.emit(false);
  }

  avgPages(){
    let averagePages = this.results.reduce((a,b) => a + b.pages, 0)
    console.log(averagePages);
  }

  //Charts:
  //AvgPagesChart:

}
