import { Component, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onCLick()'
  }
})
export class ControlComponent {
  //@HostBinding('class') className = 'control';
  // @HostListener('click') onCLick() {
  //   console.log('clicked');
  // }
  label = input.required<string>();
  private el = inject(ElementRef);

  onCLick() {
    console.log('clicked');
    console.log(this.el);
  }
}
