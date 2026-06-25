import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  template: `
    <header>
      <a routerLink="/" fragment="home" class="logo"><i class="fas fa-code"></i> Akhil</a>

      <div id="menu" class="fas fa-bars" [class.fa-times]="menuOpen()" (click)="toggle()"
           role="button" aria-label="Toggle menu" tabindex="0"></div>

      <nav class="navbar" [class.nav-toggle]="menuOpen()">
        <ul>
          @for (link of links; track link.id) {
            <li>
              <a [class.active]="active() === link.id"
                 routerLink="/" [fragment]="link.id" (click)="close()">{{ link.label }}</a>
            </li>
          }
        </ul>
      </nav>
    </header>
  `
})
export class Header {
  readonly links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'work', label: 'Work' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  readonly menuOpen = signal(false);
  readonly active = signal('home');

  toggle() {
    this.menuOpen.update((v) => !v);
  }

  close() {
    this.menuOpen.set(false);
  }

  @HostListener('window:scroll')
  onScroll() {
    if (this.menuOpen()) {
      this.menuOpen.set(false);
    }
    const y = window.scrollY;
    let current = this.active();
    for (const link of this.links) {
      const el = document.getElementById(link.id);
      if (!el) {
        continue;
      }
      const top = el.offsetTop - 200;
      if (y > top && y < top + el.offsetHeight) {
        current = link.id;
      }
    }
    this.active.set(current);
  }
}
