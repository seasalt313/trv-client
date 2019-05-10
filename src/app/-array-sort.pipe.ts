//Sort Room Prices from least to greatest
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "arraySort"
})
export class ArraySortPipe implements PipeTransform {
  transform(array: any): any[] {
    console.log("hello", array);

    if (!Array.isArray(array)) {
      console.log("hello");

      return;
    }
    array.sort((a: any, b: any) => {
      if (a.price_in_usd < b.price_in_usd) {
        return -1;
      } else if (a.price_in_usd > b.price_in_usd) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
