import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <section class="footer">
      <div class="box-container">
        <div class="box">
          <h3>Akhil's Portfolio</h3>
          <p>Thank you for visiting my personal portfolio website. Connect with me over email, GitHub, or my portfolio link.</p>
        </div>

        <div class="box">
          <h3>quick links</h3>
          <a routerLink="/" fragment="home"><i class="fas fa-chevron-circle-right"></i> home</a>
          <a routerLink="/" fragment="about"><i class="fas fa-chevron-circle-right"></i> about</a>
          <a routerLink="/" fragment="skills"><i class="fas fa-chevron-circle-right"></i> skills</a>
          <a routerLink="/" fragment="education"><i class="fas fa-chevron-circle-right"></i> education</a>
          <a routerLink="/" fragment="work"><i class="fas fa-chevron-circle-right"></i> work</a>
          <a routerLink="/" fragment="experience"><i class="fas fa-chevron-circle-right"></i> experience</a>
        </div>

        <div class="box">
          <h3>contact info</h3>
          <p><i class="fas fa-envelope"></i>akhilnmuthyala&#64;gmail.com</p>
          <p><i class="fas fa-map-marked-alt"></i>San Francisco, CA</p>
          <div class="share">
            <a href="https://www.linkedin.com/in/akhil-n-muthyala-78199b1b8" class="fab fa-linkedin" aria-label="LinkedIn" target="_blank" rel="noopener"></a>
            <a href="https://github.com/AKHIL-21" class="fab fa-github" aria-label="GitHub" target="_blank" rel="noopener"></a>
            <a href="mailto:akhilnmuthyala@gmail.com" class="fas fa-envelope" aria-label="Mail"></a>
            <a href="https://akhilmuthyala-portfolio.vercel.app/" class="fas fa-globe" aria-label="Portfolio" target="_blank" rel="noopener"></a>
          </div>
        </div>
      </div>

      <h1 class="credit">Built by <a href="https://akhilmuthyala-portfolio.vercel.app/">Akhil Muthyala</a></h1>
    </section>
  `
})
export class Footer {}
