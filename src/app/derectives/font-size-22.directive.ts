import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appFontSize22]'
})
export class FontSize22Directive {

  constructor(private elementRef: ElementRef) {
    const value = elementRef.nativeElement;

    value.style.fontSize = '22px';
  }

}
