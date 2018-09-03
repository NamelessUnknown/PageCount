import { Injectable } from "../../node_modules/@angular/core";
import { Result } from "../_models/Result";
import { Resolve, Router, ActivatedRouteSnapshot } from "../../node_modules/@angular/router";
import { ResultService } from "../_services/result.service";
import { AlertifyService } from "../_services/alertify.service";
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ResultDetailResolver implements Resolve<Result> {
    
    constructor(private resultService: ResultService, private router: Router, private alertify: AlertifyService) {}
    resolve(route: ActivatedRouteSnapshot): Observable<Result>{
        return this.resultService.getResult(route.params['id']).pipe(
            catchError(error => {
                this.alertify.error('problem retrieving data');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}