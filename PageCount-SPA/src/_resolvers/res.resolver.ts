
import { Injectable } from "../../node_modules/@angular/core";
import { Result } from "../_models/Result";
import { Resolve, Router, ActivatedRouteSnapshot } from "../../node_modules/@angular/router";
import { ResultService } from "../_services/result.service";
import { AlertifyService } from "../_services/alertify.service";
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ResultDetailResolver } from "./result-detail.resolver";
import { ResultsComponent } from "../components/results/results.component";
import { ResultsDateResolver } from "./resultsdate.resolver";

@Injectable()
export class ResResolver implements Resolve<{ first: any, second: any }> {
    constructor(
      protected singleResultResolver: ResultDetailResolver,
      protected resultsByDateResolver: ResultsDateResolver
    ) {}
  
    async resolve(route): Promise<{ first: any, second: any }> {
      const first = await this.singleResultResolver.resolve(route);
      const second = await this.resultsByDateResolver.resolve(route);
  
      return { first, second };
    }
  }
  