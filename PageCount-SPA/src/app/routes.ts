import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { ManagerDashboardComponent } from '../components/manager-dashboard/manager-dashboard.component';
import { PagecountComponent } from '../components/pagecount/pagecount.component';
import { AuthGuard } from '../_guards/auth.guard';
import { OperatorsComponent } from '../components/operators/operators.component';
import { OperatorDetailsComponent } from '../components/operatror-details/operator-details.component';
import { UserDetailResolver } from '../_resolvers/user-detail.resolver';
import { OperatorsResolver } from '../_resolvers/operators.resolver';
import { ResultsComponent } from '../components/results/results.component';

import { ResultsResolver } from '../_resolvers/results.resolver';
import { ResultDetailResolver } from '../_resolvers/result-detail.resolver';
import { ResultDetailsComponent } from '../components/result-details/result-details.component';
import { ResultsDateResolver } from '../_resolvers/resultsdate.resolver';




export const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent},
            { 
                path: 'manager-dashboard',
                component: ManagerDashboardComponent,
                children: [
                    
                ]
            },
            { path: 'operators', component: OperatorsComponent, resolve: {users: OperatorsResolver}},
            { path: 'operators/:id', component: OperatorDetailsComponent, resolve: {user: UserDetailResolver}},
            { path: 'results', component: ResultsComponent, resolve: {results: ResultsResolver} },
            { path: 'results/:id', component: ResultDetailsComponent, resolve: {result: ResultDetailResolver, results: ResultsDateResolver}},
            { path: 'page-count', component: PagecountComponent},
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full'},
];
