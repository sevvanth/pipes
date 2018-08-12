import { Component, OnInit, Input } from '@angular/core';
import { sampleService } from './sample.service';
import { AdvanceService } from './advance.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[sampleService, AdvanceService]
})
export class AppComponent implements OnInit {
  title = 'service';
 

  constructor(private sampleValue: sampleService, private advance:AdvanceService) {

  }

  ngOnInit () {
  	console.log(this.sampleValue);
  	console.log(this.advance);
  }


  add() {
  	this.advance.addValue(5,7);
  	console.log(this.advance);
  }
}
