import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import VanillaTilt from 'vanilla-tilt';
import { DataService } from '../../data';
import { Project } from '../../models';
import { getSR } from '../../reveal';
import { ProjectArt } from '../project-art/project-art';

@Component({
  selector: 'app-work',
  imports: [RouterLink, ProjectArt],
  template: `
    <section class="work" id="work">
      <h2 class="heading"><i class="fas fa-laptop-code"></i> Projects <span>Made</span></h2>

      <div class="projects-grid">
        @for (project of projects(); track project.name) {
          <article class="project-card tilt">
            <div class="project-card__art pa--{{ project.art }}">
              <app-project-art [art]="project.art" />
            </div>
            <div class="project-card__body">
              @if (project.tagline) { <span class="project-card__tagline">{{ project.tagline }}</span> }
              <h3 class="project-card__title">{{ project.name }}</h3>
              <p class="project-card__desc">{{ project.desc }}</p>
              @if (project.tech?.length) {
                <div class="project-card__tech">
                  @for (t of project.tech; track t) { <span>{{ t }}</span> }
                </div>
              }
              @if (project.links?.view || project.links?.code) {
                <div class="project-card__links">
                  @if (project.links?.view) {
                    <a [href]="project.links!.view" target="_blank" rel="noopener"><i class="fas fa-eye"></i> Live</a>
                  }
                  @if (project.links?.code) {
                    <a [href]="project.links!.code" target="_blank" rel="noopener"><i class="fas fa-code"></i> Code</a>
                  }
                </div>
              }
            </div>
          </article>
        }
      </div>

      <div class="viewall">
        <a routerLink="/projects" class="btn"><span>View All</span>
          <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </section>
  `
})
export class Work implements OnInit {
  private data = inject(DataService);
  readonly projects = signal<Project[]>([]);

  ngOnInit() {
    this.data.getProjects().subscribe((projects) => {
      this.projects.set(projects.slice(0, 10));
      setTimeout(() => {
        VanillaTilt.init(Array.from(document.querySelectorAll<HTMLElement>('.work .tilt')), { max: 6, glare: true, 'max-glare': 0.15 });
        getSR().reveal('.work .project-card', { interval: 200 });
      }, 0);
    });
  }
}
