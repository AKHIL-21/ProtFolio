import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import Typed from 'typed.js';
import VanillaTilt from 'vanilla-tilt';
import 'particles.js';
import { PARTICLES_CONFIG } from '../../particles-config';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  template: `
    <section class="home" id="home">
      <div id="particles-js"></div>

      <div class="content">
        <h2>Hi There,<br /> I'm Akhil <span>Muthyala</span></h2>
        <p>i am into <span class="typing-text"></span></p>
        <a routerLink="/" fragment="about" class="btn"><span>About Me</span>
          <i class="fas fa-arrow-circle-down"></i>
        </a>
        <div class="socials">
          <ul class="social-icons">
            <li><a class="linkedin" aria-label="LinkedIn" href="https://www.linkedin.com/in/akhil-n-muthyala-78199b1b8" target="_blank" rel="noopener"><i class="fab fa-linkedin"></i></a></li>
            <li><a class="github" aria-label="GitHub" href="https://github.com/AKHIL-21" target="_blank" rel="noopener"><i class="fab fa-github"></i></a></li>
            <li><a class="portfolio" aria-label="Portfolio" href="https://akhilmuthyala-portfolio.vercel.app/" target="_blank" rel="noopener"><i class="fas fa-globe"></i></a></li>
            <li><a class="email" aria-label="Email" href="mailto:akhilnmuthyala@gmail.com"><i class="fas fa-envelope"></i></a></li>
          </ul>
        </div>
      </div>

      <div class="image">
        <img draggable="false" class="tilt akhil-photo" src="assets/images/akhil-profile.png" alt="Akhil Muthyala" />
      </div>
    </section>
  `
})
export class Hero implements AfterViewInit, OnDestroy {
  private typed?: Typed;

  ngAfterViewInit() {
    if (window.particlesJS) {
      window.particlesJS('particles-js', PARTICLES_CONFIG);
    }

    this.typed = new Typed('.typing-text', {
      strings: ['Full Stack .NET Developer', 'Angular Developer', 'Azure Certified (AZ-204)', 'Software Engineer'],
      loop: true,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 500
    });

    const img = document.querySelector('.home .tilt') as HTMLElement | null;
    if (img) {
      VanillaTilt.init(img, { max: 15 });
    }
  }

  ngOnDestroy() {
    this.typed?.destroy();
  }
}
