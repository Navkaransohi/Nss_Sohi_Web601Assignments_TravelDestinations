import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {

  @Input() affectStyle: 'underline' | 'bold' | 'border' = 'underline';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.applyStyle();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.removeStyle();
  }

  private applyStyle() {
    if (this.affectStyle === 'underline') {
      this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'underline');
    } else if (this.affectStyle === 'bold') {
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
    } else if (this.affectStyle === 'border') {
      const isFirstOrLastCard = this.el.nativeElement.classList.contains('content-card') &&
        (this.el.nativeElement.classList.contains('first-card') ||
          this.el.nativeElement.classList.contains('last-card'));
      if (isFirstOrLastCard) {
        this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid red');
      }
    }
  }

  private removeStyle() {
    if (this.affectStyle === 'underline') {
      this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'none');
    } else if (this.affectStyle === 'bold') {
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'normal');
    } else if (this.affectStyle === 'border') {
      const isFirstOrLastCard = this.el.nativeElement.classList.contains('content-card') &&
        (this.el.nativeElement.classList.contains('first-card') ||
          this.el.nativeElement.classList.contains('last-card'));
      if (isFirstOrLastCard) {
        this.renderer.setStyle(this.el.nativeElement, 'border', '');
      }
    }
  }
}
