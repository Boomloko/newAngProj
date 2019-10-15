import { Directive, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHightLight]'
})
export class HightLightDirective implements OnInit{

  // @HostBinding('style.color') myColor: string;
  // @HostBinding('style.fontSize') myFontSize: string;
  
  @HostBinding('class') classes = 'light';

  constructor() { }

  ngOnInit(){
    
  }
  @HostListener('mouseenter') mouseEnterEvent () {
    // this.myFontSize = '2rem';
    // this.myColor = 'blue';
    this.classes = 'light';
  }
  @HostListener('mouseleave') mouseLeaveEvent () {
    // this.myFontSize = '1rem';
    // this.myColor = 'black';
    this.classes = 'removeClass';
  }
}
