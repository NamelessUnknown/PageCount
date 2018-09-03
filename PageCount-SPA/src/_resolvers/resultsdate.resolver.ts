import { Injectable } from "../../node_modules/@angular/core";
import { Result } from "../_models/Result";
import { Resolve, Router, ActivatedRouteSnapshot } from "../../node_modules/@angular/router";
import { ResultService } from "../_services/result.service";
import { AlertifyService } from "../_services/alertify.service";
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ResultsDateResolver implements Resolve<Result[]> {
    
    constructor(private resultService: ResultService, private router: Router, private alertify: AlertifyService) {}
    time: string;
    resolve(route: ActivatedRouteSnapshot): Observable<Result[]>{
        // this.resultService.getResult(route.params['id']).subscribe((item:Result) => {
        //     this.time = item.dateAdded.toString().slice(0,10);
        //     console.log(this.time)
        // });
        return this.resultService.getResults().pipe(
            catchError(error => {
                this.alertify.error('problem retrieving data');
                this.router.navigate(['/results']);
                return of(null);
            }),
        );
    }



    
}