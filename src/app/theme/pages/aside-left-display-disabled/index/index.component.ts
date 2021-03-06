import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';

import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['index.component.css']
})
export class IndexComponent implements OnInit, AfterViewInit {


  constructor(private _script: ScriptLoaderService) {

  }


  ngOnInit() { }
  ngAfterViewInit() {
    this._script.loadScripts('app-index',
      ['/assets/app/js/dashboard.js']);

    Helpers.bodyClass('m-page--boxed m-body--fixed m-header--static m-aside--offcanvas-default');

  }

}
