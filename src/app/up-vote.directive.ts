import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUpVote]'
})
export class UpVoteDirective {

  constructor(private elem: ElementRef) { }

  @HostListener( 'click' ) onClicks() {
    this.voteAdder(+ 1);
  }

  @HostListener('dblclick') onDoubleClicks() {
    this.voteAdder(- 1);
  }

  private voteAdder(action: number) {
    this.elem.nativeElement.innerHTML = action;

  }

}
