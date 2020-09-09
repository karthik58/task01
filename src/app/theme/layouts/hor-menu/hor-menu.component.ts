import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../helpers';

declare let mLayout: any;
@Component({
    selector: "app-hor-menu",
    templateUrl: "./hor-menu.component.html",
    styleUrls:['./hor-menu.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class HorMenuComponent implements OnInit, AfterViewInit {


    constructor() {

    }
    ngOnInit() {

    }
    ngAfterViewInit() {

        mLayout.initHeader();

    }

}