import { AfterViewInit, Component } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';

@Component({
  selector: 'app-about',
  template: `
    <section class="about" id="about">
      <h2 class="heading"><i class="fas fa-user-alt"></i> About <span>Me</span></h2>

      <div class="row">
        <div class="image">
          <img draggable="false" class="tilt akhil-photo" src="assets/images/akhil-profile.png" alt="Akhil Muthyala" />
        </div>
        <div class="content">
          <h3>I'm Akhil</h3>
          <span class="tag">Full Stack Software Development Engineer (.NET / Angular)</span>

          <p>I am a Full Stack Software Development Engineer based in Austin, TX, with
            experience delivering enterprise web applications across government, insurance,
            and education. I work with C# / .NET Core, ASP.NET Core, Angular, TypeScript,
            SQL Server, Entity Framework Core, and Azure. I am currently modernizing the
            Missouri Child Support System at Deloitte by converting legacy mainframe workflows
            into secure, accessible ASP.NET Core Razor Pages integrated with REST APIs and
            SQL Server. I am Microsoft AZ-204 certified and hold a Master's Degree in Computer Science.</p>

          <div class="box-container">
            <div class="box">
              <p><span> email : </span> akhilnmuthyala&#64;gmail.com</p>
              <p><span> place : </span> Austin, TX</p>
            </div>
          </div>

          <div class="resumebtn">
            <a href="assets/resume.pdf" target="_blank" rel="noopener" class="btn"><span>Resume</span>
              <i class="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class About implements AfterViewInit {
  ngAfterViewInit() {
    const img = document.querySelector('.about .tilt') as HTMLElement | null;
    if (img) {
      VanillaTilt.init(img, { max: 15 });
    }
  }
}
