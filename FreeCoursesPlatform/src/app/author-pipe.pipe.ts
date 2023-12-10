import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'authorPipe'
})
export class AuthorPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return "By Author " + value;
  }

}
