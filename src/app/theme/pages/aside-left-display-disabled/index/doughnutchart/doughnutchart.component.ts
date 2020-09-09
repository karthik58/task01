import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-doughnutchart',
  templateUrl: "./doughnutchart.component.html",
  styleUrls: ['./doughnutchart.component.css'],

})
export class DoughnutchartComponent implements OnInit {


  constructor(private httpClient: HttpClient) {

  }




  ngOnInit(): void { }



}
