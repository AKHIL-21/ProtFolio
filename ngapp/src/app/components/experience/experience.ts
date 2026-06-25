import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-experience',
  imports: [RouterLink],
  template: `
    <section class="experience" id="experience">
      <h2 class="heading"><i class="fas fa-briefcase"></i> Experience</h2>

      <div class="timeline">
        <div class="container right">
          <div class="content">
            <div class="tag"><h2>Deloitte</h2></div>
            <div class="desc">
              <h3>Software Development Engineer 1</h3>
              <p>Oct 2024 - Present</p>
            </div>
          </div>
        </div>

        <div class="container left">
          <div class="content">
            <div class="tag"><h2>SITEK Inc</h2></div>
            <div class="desc">
              <h3>Software Developer</h3>
              <p>Aug 2024 - Oct 2024</p>
            </div>
          </div>
        </div>

        <div class="container right">
          <div class="content">
            <div class="tag"><h2>Eastern Kentucky University</h2></div>
            <div class="desc">
              <h3>Graduate Assistant Programmer &amp; Application Support Developer</h3>
              <p>Aug 2023 - May 2024</p>
            </div>
          </div>
        </div>

        <div class="container left">
          <div class="content">
            <div class="tag"><h2>Dot Spiders</h2></div>
            <div class="desc">
              <h3>Software Developer</h3>
              <p>Jul 2021 - Mar 2023</p>
            </div>
          </div>
        </div>
      </div>

      <div class="morebtn">
        <a routerLink="/experience" class="btn"><span>View All</span>
          <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </section>
  `
})
export class Experience {}
