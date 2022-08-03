import { Pipe, PipeTransform } from '@angular/core';
import { Todos } from '../Todos';

@Pipe({
  name: 'filterTask',
})
export class FilterTaskPipe implements PipeTransform {
  transform(value: Todos[], check: boolean): Todos[] {
    return value.filter((e) => e.done === check);
  }
}
