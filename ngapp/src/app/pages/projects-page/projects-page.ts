import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import VanillaTilt from 'vanilla-tilt';
import { DataService } from '../../data';
import { Project } from '../../models';
import { getSR } from '../../reveal';
import { ProjectArt } from '../../components/project-art/project-art';

@Component({
  selector: 'app-projects-page',
  imports: [RouterLink, ProjectArt],
  template: `
    <section class="work" id="work" style="padding-top: 10rem;">
      <h2 class="heading"><i class="fas fa-laptop-code"></i> Projects <span>Built</span></h2>

      <div class="button-group">
        @for (f of filters; track f.value) {
          <button class="btn" [class.is-checked]="filter() === f.value" (click)="setFilter(f.value)">
            {{ f.label }}
          </button>
        }
      </div>

      <div class="projects-grid">
        @for (project of filtered(); track project.name) {
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

      <div class="backbtn">
        <a routerLink="/" fragment="work" class="btn">
          <i class="fas fa-arrow-left"></i>
          <span>Back to Home</span>
        </a>
      </div>
    </section>
  `
})
export class ProjectsPage implements OnInit {
  private data = inject(DataService);

  readonly filters = [
    { label: 'All Projects', value: '*' },
    { label: 'Enterprise', value: 'enterprise' },
    { label: 'Full Stack', value: 'fullstack' }
  ];

  readonly all = signal<Project[]>([]);
  readonly filter = signal('*');
  readonly filtered = computed(() => {
    const f = this.filter();
    const list = this.all();
    return f === '*' ? list : list.filter((p) => p.category === f);
  });

  ngOnInit() {
    this.data.getProjects().subscribe((projects) => {
      this.all.set(projects);
      setTimeout(() => this.initFx(), 0);
    });
  }

  protected setFilter(value: string) {
    this.filter.set(value);
    setTimeout(() => this.initFx(), 0);
  }

  protected initFx() {
    VanillaTilt.init(Array.from(document.querySelectorAll<HTMLElement>('.work .tilt')), { max: 6, glare: true, 'max-glare': 0.15 });
    getSR().reveal('.work .project-card', { interval: 150 });
  }
}
