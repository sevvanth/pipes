import {Pipe, PipeTransform} from '@angular/core';
@Pipe ({
   name : 'square'
})
export class SqrtPipe implements PipeTransform {
   transform(val : number) : string {
   	let value = val % 2;
   	if(value == 0) {
   		let status = 'even';
   		return status;
   	} else {
   		let status = 'Odd';
      return 'Odd';
   	}
   	
   }
}