import { AfterViewInit, Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { About } from '../../components/about/about';
import { Skills } from '../../components/skills/skills';
import { Education } from '../../components/education/education';
import { Work } from '../../components/work/work';
import { Experience } from '../../components/experience/experience';
import { Contact } from '../../components/contact/contact';
import { getSR } from '../../reveal';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Skills, Education, Work, Experience, Contact],
  template: `
    <app-hero />
    <app-about />
    <app-skills />
    <app-education />
    <app-work />
    <app-experience />
    <app-contact />
  `
})
export class Home implements AfterViewInit {
  ngAfterViewInit() {
    const sr = getSR();

    sr.reveal('.home .content h2', { delay: 200 });
    sr.reveal('.home .content p', { delay: 200 });
    sr.reveal('.home .content .btn', { delay: 200 });
    sr.reveal('.home .image', { delay: 400 });
    sr.reveal('.home .social-icons li', { interval: 200 });

    sr.reveal('.about .content h3', { delay: 200 });
    sr.reveal('.about .content .tag', { delay: 200 });
    sr.reveal('.about .content p', { delay: 200 });
    sr.reveal('.about .content .box-container', { delay: 200 });
    sr.reveal('.about .content .resumebtn', { delay: 200 });

    sr.reveal('.education .box', { interval: 200 });

    sr.reveal('.experience .timeline', { delay: 400 });
    sr.reveal('.experience .timeline .container', { interval: 400 });

    sr.reveal('.contact .container', { delay: 400 });
    sr.reveal('.contact .container .form-group', { delay: 400 });
  }
}
