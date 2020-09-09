import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';
import { LayoutModule } from '../../../layouts/layout.module';
import { AsideLeftDisplayDisabledComponent } from '../aside-left-display-disabled.component';
import { ChartsModule } from 'ng2-charts';
import { DoughnutchartComponent } from './doughnutchart/doughnutchart.component';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import 'chartjs-plugin-labels';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
    {
        "path": "",
        "component": AsideLeftDisplayDisabledComponent,
        "children": [
            {
                "path": "",
                "component": IndexComponent
            }
        ]
    }
];
@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule, ChartsModule, RoundProgressModule,
        NgCircleProgressModule.forRoot({}),
        HttpClientModule
    ], exports: [
        RouterModule
    ], declarations: [
        IndexComponent,
        DoughnutchartComponent
    ]
})
export class IndexModule {



}