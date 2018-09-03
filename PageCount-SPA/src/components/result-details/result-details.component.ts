import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from '../../_models/Result';
import { Chart } from 'chart.js';
import { AlertifyService } from '../../_services/alertify.service';


@Component({
  selector: 'app-result-details',
  templateUrl: './result-details.component.html',
  styleUrls: ['./result-details.component.css']
})
export class ResultDetailsComponent implements OnInit {
result: Result;
results: Result [];
resultsByDate: Result [] = [];
resultsToCompare: Result [] = [];
//Charts:
pagesChart; associationsChart; adsChart; adsTimeChart;
//Data for compare to this result:
pagesForCompare; associationsForCompare; adsForCompare; adsTimeForCompare;
pagesPercent; associationsPercent; adsPercent; adsTimePercent;


  constructor(private route: ActivatedRoute, private alertify: AlertifyService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.result = data ['result']
      this.results = data ['results']
    });
    
    this.resultsForStats();

    this.resultsToCompare;
    this.pagesChart = new Chart('canvasPages', {
      type: 'pie',
      data:{
        labels: ['Pages by operator', 'Remaining Pages'],
        datasets: [{
            label:'pages',
            data: [this.result.pages, this.pagesForCompare],
            backgroundColor: ['green','orange']
        }],
      },
      options: {
        responsive: true,
        animation: {
          animateScale: true
        },
        title: {
            display: true,
            text: 'Pages VPS'
        }
      }
    }),
    this.associationsChart = new Chart('canvasAssociations', {
      type: 'pie',
      data:{
        labels: ['Associations by operator', 'Remaining Associations'],
        datasets: [{
            label:'associations',
            data: [this.result.associations, this.associationsForCompare],
            backgroundColor: ['green','orange']
        }],
      },
      options: {
        responsive: true,
        animation: {
          animateScale: true
        },
        title: {
            display: true,
            text: 'Associations'
        }
      }

    }),
    this.adsChart = new Chart('canvasAds', {
      type: 'pie',
      data:{
        labels: ['Ads by operator', 'Remaining Ads'],
        datasets: [{
            label:'ads',
            data: [this.result.ads, this.adsForCompare],
            backgroundColor: ['green','orange']
        }],
      },
      options: {
        responsive: true,
        animation: {
          animateScale: true
        },
        title: {
            display: true,
            text: 'Transmit Ads'
        }
      }
      
    })
    this.adsTimeChart = new Chart('canvasTimeAds', {
      type: 'pie',
      data:{
        labels: ['Time Spent on ads','Remaining Time'],
        datasets: [{
            label:'ads - time',
            data: [this.result.timeSpentOnAds, this.adsTimeForCompare],
            backgroundColor: ['green','orange']
        }],
      },
      options: {
        responsive: true,
        animation: {
          animateScale: true
        },
        title: {
            display: true,
            text: 'Ads - Time'
        }
      }
      
    })
    
  }
  resultsForStats(){
    let resultForDelete = this.result.userId;
    let dateToHandle = this.result.dateAdded;
    this.resultsToCompare = this.results.filter(x => x.userId != resultForDelete).filter(y => y.dateAdded == dateToHandle);
    this.pagesForCompare = this.resultsToCompare.reduce((a, b) => a + b.pages,0);
    this.associationsForCompare = this.resultsToCompare.reduce((a, b) => a + b.associations,0);
    this.adsForCompare = this.resultsToCompare.reduce((a, b) => a + b.ads,0);
    this.adsTimeForCompare = this.resultsToCompare.reduce((a, b) => a + b.timeSpentOnAds,0);
    this.pagesPercent = Math.floor((this.result.pages/(this.pagesForCompare + this.result.pages))*100);
    this.associationsPercent = Math.floor((this.result.associations/(this.associationsForCompare + this.result.associations))*100);
    this.adsPercent = Math.floor((this.result.ads/(this.adsForCompare + this.result.ads)*100));
    this.adsTimePercent = Math.floor((this.result.timeSpentOnAds/(this.adsTimeForCompare + this.result.timeSpentOnAds))*100);
  
  }
}

