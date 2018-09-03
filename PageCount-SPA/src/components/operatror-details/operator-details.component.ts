import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/User';
import { UserService } from '../../_services/user.service';
import { AlertifyService } from '../../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { Result } from '../../_models/Result';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-operator-details',
  templateUrl: './operator-details.component.html',
  styleUrls: ['./operator-details.component.css']
})
export class OperatorDetailsComponent implements OnInit {
user: User;
reses: Result[] = [];
sortFlag:boolean;

//Chart data
chart: any;
daysForTable = [];
pagesForChart = new Array(7).fill(null);
associationsForChart = new Array(7).fill(null);
adsForChart = new Array(7).fill(null);

thisWeekData(){
//TODO: add possibility to choose the day here
  
  this.reses = this.reses.sort((a,b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
  let today = new Date().getDay();
  let recentWeek = this.reses.slice(0, today);
  let daysToShow:Result[] = []
  for(var item of recentWeek){
    let temp = new Date(item.dateAdded);
    if(temp.getDay() < today && new Date().getDate() - temp.getDate() < 7) {
      daysToShow.push(item);
    }
  }
  daysToShow = daysToShow.reverse();
  for(var a of daysToShow){
    console.log(new Date(a.dateAdded).getDay());
  }

    for(var c of daysToShow){
      this.pagesForChart.splice(new Date(c.dateAdded).getDay(), 1, c.pages);
      this.associationsForChart.splice(new Date(c.dateAdded).getDay(), 1, c.associations);
      this.adsForChart.splice(new Date(c.dateAdded).getDay(), 1, c.ads);
    }
    console.log(this.pagesForChart)
    console.log(this.associationsForChart)
    console.log(this.adsForChart)
}




  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data ['user'],
      this.reses = this.user.results;
    });
    this.thisWeekData();
    

  // this.loadUser();
  this.chart = new Chart('canvas', {
    type: 'bar',
    data: {
      labels: ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      datasets:[{
        label:'Pages',
        data: this.pagesForChart,
        backgroundColor: 'red'
      },
      {
        label:'Associations',
        data: this.associationsForChart,
        backgroundColor: 'green'
      },
      {
        label:'Ads',
        data: this.adsForChart,
        backgroundColor: 'blue'
      }]
    },
    options: {
      legend: {
        display:true
      },
      scales: {
        xAxes: [{
          display: true,
        }],
        yAxes: [{
          display: true,
          ticks: {
            beginAtZero: true, 
          },
          labels: ['Pages','Associations','Ads'],
          
        }],
      }
    }
  }) 

  
  }

  
//SORTING THE TABLE >> There has to be more generic way to do that:
  sortType(type:string){
    this.sortFlag = !this.sortFlag;
    console.log(this.sortFlag)

    if(type==="pages") {
      this.reses = this.reses.sort(this.sortFlag == false? (a,b) => a.pages - b.pages : (a,b) =>b.pages - a.pages)
    }
    else if(type==="associations") {
      this.reses = this.reses.sort(this.sortFlag == false? (a,b) => a.associations - b.associations : (a,b) =>b.associations - a.associations)
    }
    else if(type==="ads") {
      this.reses = this.reses.sort(this.sortFlag == false? (a,b) => a.ads - b.ads : (a,b) =>b.ads - a.ads)
    }
    else if(type==="adsTime") {
      this.reses = this.reses.sort(this.sortFlag == false? (a,b) => a.timeSpentOnAds - b.timeSpentOnAds : (a,b) =>b.timeSpentOnAds - a.timeSpentOnAds)
    }
    else if(type==="date") {
      this.reses = this.reses.sort(this.sortFlag == false? 
          (a,b) => new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime() : (a,b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime())
    }

  }

  // loadUser(){// "+" działa jak cast, robi ze stringa number
  //   this.userService.getUser(+this.route.snapshot.params['id']).subscribe((user:User) => {
  //     this.user = user,
  //     this.reses = user.results;
  //   }), error => {
  //     this.alertify.error(error);
  //   }
  // }

}
