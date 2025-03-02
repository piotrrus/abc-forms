import { Directive, ElementRef, HostListener, OnChanges } from '@angular/core';

@Directive({
     selector: '[bldNoSpecialCharacters]',
})
export class NoSpecialCharactersDirective implements OnChanges {
     constructor(private el: ElementRef<HTMLInputElement>) {}

     @HostListener('input', ['$event'])
     public ngOnChanges(): void {
          const initalValue: string = this.el.nativeElement.value;

          let tempText: string = initalValue.replace(/[!^`@[\](){}$*&#=+%"<>]*/g, '');
          tempText = tempText.replace('sql', '');
          tempText = tempText.replace('script', '');
          tempText = tempText.replace('table', '');
          tempText = tempText.replace('import', '');
          tempText = tempText.replace('0x', '');
          this.el.nativeElement.value = tempText;
     }

     @HostListener('blur')
     public onBlur(): void {
          if (this.el.nativeElement.value) {
               const textValue = this.el.nativeElement.value;
               this.el.nativeElement.value = textValue.trim();
          }
     }
}
