import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Helpers } from '../../../helpers';
import { ScriptLoaderService } from '../../../_services/script-loader.service';


@Component({
    selector: "app-header-topbar",
    templateUrl: "./header-topbar.component.html",
    styleUrls:['./header-topbar.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class HeaderTopbarComponent implements OnInit {


    constructor(private _script: ScriptLoaderService) {

    }
    ngOnInit() {

    }

    ngAfterViewInit()  {
        this._script.loadScripts('app-index',
        ['assets/app/js/dashboard.js']);
        
        }

}