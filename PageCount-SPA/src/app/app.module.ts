//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';

//Services
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { ErrorInterceptorProvider } from '../_services/error.interceptor';
import { AuthGuard } from '../_guards/auth.guard';

//Components
import { AppComponent } from './app.component';
import { NavComponent } from '../components/nav/nav.component';
import { HomeComponent } from '../components/home/home.component';
import { RegisterComponent } from '../components/register/register.component';
import { PagecountComponent } from '../components/pagecount/pagecount.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { appRoutes } from './routes';
import { ManagerDashboardComponent } from '../components/manager-dashboard/manager-dashboard.component';
import { UserService } from '../_services/user.service';
import { OperatorsComponent } from '../components/operators/operators.component';
import { ResultsComponent } from '../components/results/results.component';
import { OperatorCardComponent } from '../components/operator-card/operator-card.component';
import { FilterPipe } from '../custompipes/filter.pipe';
import { RadioPipe } from '../custompipes/radio.pipe';
import { ResultService } from '../_services/result.service';
import { JwtModule } from '@auth0/angular-jwt';
import { OperatorDetailsComponent } from '../components/operatror-details/operator-details.component';
import { UserDetailResolver } from '../_resolvers/user-detail.resolver';
import { OperatorsResolver } from '../_resolvers/operators.resolver';
import { OrderBy } from '../custompipes/orderBy.pipe';
import { ResultDetailsComponent } from '../components/result-details/result-details.component';
import { ResultDetailResolver } from '../_resolvers/result-detail.resolver';
import { ResultsResolver } from '../_resolvers/results.resolver';
import { ResultsDateResolver } from '../_resolvers/resultsdate.resolver';
import { ResResolver } from '../_resolvers/res.resolver';

export function tokkenGetter(){
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    PagecountComponent,
    DashboardComponent,
    ManagerDashboardComponent,
    OperatorsComponent,
    ResultsComponent,
    OperatorCardComponent,
    OperatorDetailsComponent,
    ResultDetailsComponent,
    FilterPipe,
    RadioPipe,
    OrderBy,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokkenGetter,
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes: ['localhost:5000/api/auth']
      }
    })
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    AlertifyService,
    AuthGuard,
    UserService,
    ResultService,
    UserDetailResolver,
    OperatorsResolver,
    ResultDetailResolver,
    ResultsResolver,
    ResultsDateResolver,
    ResResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
