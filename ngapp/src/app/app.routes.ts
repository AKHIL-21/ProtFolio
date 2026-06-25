import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProjectsPage } from './pages/projects-page/projects-page';
import { ExperiencePage } from './pages/experience-page/experience-page';

export const routes: Routes = [
  { path: '', component: Home, title: 'Portfolio | Akhil Muthyala' },
  { path: 'projects', component: ProjectsPage, title: 'Projects | Akhil Muthyala' },
  { path: 'experience', component: ExperiencePage, title: 'Experience | Akhil Muthyala' },
  { path: '**', redirectTo: '' }
];
