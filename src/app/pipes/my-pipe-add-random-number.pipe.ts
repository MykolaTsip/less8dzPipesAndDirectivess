import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipeAddRandomNumber'
})
export class MyPipeAddRandomNumberPipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {
    console.log(value);
    console.log(args[0]);

    if (args[0] === 2) {
      return  value + value;
    }
    if (args[0] === 3) {
      return  value + value + value;
    }
    else {
      return value;
    }

    return value;
  }

}
