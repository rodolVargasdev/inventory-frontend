import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'home', component: HomeComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
