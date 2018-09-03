import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { ResultService } from '../../_services/result.service';
import { AlertifyService } from '../../_services/alertify.service';

@Component({
  selector: 'app-pagecount',
  templateUrl: './pagecount.component.html',
  styleUrls: ['./pagecount.component.css']
})
export class PagecountComponent implements OnInit {
@Output() cancelPageCount = new EventEmitter();
//Shift 
time = new Date().getHours();
//Ads Counter
seconds:number = 0;
isCounting: boolean = false;
interval;
//model binding
model: any = {};


  constructor(public authService:AuthService, private resultService: ResultService, private alertify: AlertifyService) {}

  ngOnInit() {}

  sendResult(){
    this.model.TimeSpentOnAds = this.seconds;
    this.resultService.addPageCount(this.model).subscribe(() =>{
      this.alertify.success("Your page count has been saved succesfully")
    }, error=> {
        this.alertify.error(error)
    })
  }
  cancel() {
    this.cancelPageCount.emit(false);
  }

  start() {
    this.isCounting = true;
      this.interval = setInterval(() => {
        if(this.isCounting == true) {
          this.seconds++;
          console.log(this.seconds)
        } 
      },1000)
    }

  stop() {
    this.isCounting = false;
    clearInterval(this.interval);
  }
  reset(){
    this.seconds = 0;
  }


}
