import { Directive,Input,HostListener,ElementRef,Output,EventEmitter   } from '@angular/core';

@Directive({
  selector: '[appImageNotFound]'
})
export class ImageNotFoundDirective {

  @HostListener('error')
  onError() {
    this.setDefaultImage();
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const position = {
      x: event.clientX,
      y: event.clientY
    };
    this.mousePosition.emit(position);
  }

  @Input() defaultImage: string="";
  @Output() mousePosition = new EventEmitter<{ x: number, y: number }>();

  constructor(private element: ElementRef) { }

  private setDefaultImage() {
    console.log("Imagen no econtrada:"+this.defaultImage);
    if (this.defaultImage) {
      this.element.nativeElement.src = this.defaultImage;
    } 
  }

}
