import { Component, OnInit, Input } from '@angular/core';
import { sampleService } from '../sample.service';
import { AdvanceService } from '../advance.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  providers: [sampleService, AdvanceService]
})
export class FirstComponent implements OnInit {
	@Input();
  constructor(private sampleValue: sampleService, private advance: AdvanceService) { }
  list = [{
    'value':25
  },
  {
    'value':64
  }
  ]
  ngOnInit() {

  }

  getValue() {
  	debugger;
  	console.log(this.sampleValue);
  	console.log(this.advance.values);
  }

}
