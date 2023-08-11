import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
     
    // const[a] = args;
    const[a , b] = args;

    // return Math.pow(value , a);
    return value + a + b;
  }

}
