import { DefaultUrlSerializer, UrlTree } from '@angular/router';

export class CustomUrlSerializer extends DefaultUrlSerializer {
  parse(url: string): UrlTree {
    return super.parse(url);
  }
}
