import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-scroll-top',
  imports: [RouterLink],
  template: `
    <a routerLink="/" fragment="home" aria-label="Scroll to top"
       class="fas fa-angle-up" id="scroll-top" [class.active]="show()"></a>
  `
})
export class ScrollTop {
  readonly show = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.show.set(window.scrollY > 60);
  }
}
