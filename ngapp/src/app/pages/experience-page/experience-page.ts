import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { getSR } from '../../reveal';

@Component({
  selector: 'app-experience-page',
  imports: [RouterLink],
  template: `
    <section class="experience" id="experience" style="padding-top: 10rem;">
      <h2 class="heading"><i class="fas fa-briefcase"></i> Experience</h2>
      <div class="quote">
        <span>every experience in your life is being orchestrated to teach you something you need to know to move forward.</span>
      </div>

      <div class="timeline">
        <div class="container left">
          <div class="content">
            <div class="tag"><h2>Deloitte</h2></div>
            <div class="desc">
              <h3>Software Development Engineer 1</h3>
              <p>Oct 2024 - Present</p>
              <p>Modernizing the Missouri Child Support System with ASP.NET Core Razor Pages, REST APIs, SQL Server, and accessible enterprise workflows.</p>
            </div>
          </div>
        </div>

        <div class="container right">
          <div class="content">
            <div class="tag"><h2>SITEK Inc</h2></div>
            <div class="desc">
              <h3>Software Developer</h3>
              <p>Aug 2024 - Oct 2024</p>
              <p>Worked on full stack application delivery with .NET, Angular, SQL Server, and REST API integrations.</p>
            </div>
          </div>
        </div>

        <div class="container left">
          <div class="content">
            <div class="tag"><h2>Eastern Kentucky University</h2></div>
            <div class="desc">
              <h3>Graduate Assistant Programmer &amp; Application Support Developer</h3>
              <p>Aug 2023 - May 2024</p>
              <p>Supported application development and university systems while completing a Master's Degree in Computer Science.</p>
            </div>
          </div>
        </div>

        <div class="container right">
          <div class="content">
            <div class="tag"><h2>Dot Spiders</h2></div>
            <div class="desc">
              <h3>Software Developer</h3>
              <p>Jul 2021 - Mar 2023</p>
              <p>Built and maintained web applications using C# / .NET, Angular, TypeScript, SQL Server, and Bootstrap.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="backbtn">
        <a routerLink="/" fragment="experience" class="btn">
          <i class="fas fa-arrow-left"></i>
          <span>Back to Home</span>
        </a>
      </div>
    </section>
  `
})
export class ExperiencePage implements AfterViewInit {
  ngAfterViewInit() {
    const sr = getSR();
    sr.reveal('.experience .timeline', { delay: 300 });
    sr.reveal('.experience .timeline .container', { interval: 300 });
  }
}
