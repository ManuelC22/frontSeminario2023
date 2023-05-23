import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberAcount'
})
export class NumberAcountPipe implements PipeTransform {

  transform(value: number, ...args: any[]): unknown {
    /*let dataTransform ="";
    let separator=args[0];
    let pre=args[1];
    if(value.length>=15){
      let data =value.substring(0,3);
      let data2 = value.substring(3,6);
      let data3 = value.substring(6,9);
      let data4 = value.substring(9,15);
      dataTransform=`${pre}: ${data}${separator}${data2}${separator}${data3}${separator}${data4}`;
    }*/

    //return dataTransform;
    /*if(value=="1"){
      return "primary";
    }else if(value=="2"){
      return "accent";
    }else{
      return "warn";
    }*/
    if(value>0){
      return "primary";
    }else{
      return "warn";
    }
  }

}
