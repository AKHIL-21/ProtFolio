import { Component, OnInit, inject, signal } from '@angular/core';
import { DataService } from '../../data';
import { Skill } from '../../models';
import { getSR } from '../../reveal';

@Component({
  selector: 'app-skills',
  template: `
    <section class="skills" id="skills">
      <h2 class="heading"><i class="fas fa-laptop-code"></i> Skills & <span>Abilities</span></h2>

      <div class="container">
        <div class="row" id="skillsContainer">
          @for (skill of skills(); track skill.name) {
            <div class="bar">
              <div class="info">
                <img [src]="skill.icon" [alt]="skill.name" />
                <span>{{ skill.name }}</span>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class Skills implements OnInit {
  private data = inject(DataService);
  readonly skills = signal<Skill[]>([]);

  ngOnInit() {
    this.data.getSkills().subscribe((skills) => {
      this.skills.set(skills);
      setTimeout(() => getSR().reveal('.skills .container .bar', { interval: 100 }), 0);
    });
  }
}
