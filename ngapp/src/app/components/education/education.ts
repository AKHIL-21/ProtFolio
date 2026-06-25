import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  template: `
    <section class="education" id="education">
      <h1 class="heading"><i class="fas fa-graduation-cap"></i> My <span>Education</span></h1>

      <p class="qoute">Education is not the learning of facts, but the training of the mind to think.</p>

      <div class="box-container">
        <div class="box">
          <div class="image edu-art edu-art--a" aria-hidden="true">
            <svg class="edu-art-svg" viewBox="0 0 200 160" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="eduBgA" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stop-color="#0b0a2e" />
                  <stop offset="1" stop-color="#3a1568" />
                </linearGradient>
                <radialGradient id="eduGlowA" cx="0.5" cy="0.5" r="0.5">
                  <stop offset="0" stop-color="#7c5cff" stop-opacity="0.9" />
                  <stop offset="1" stop-color="#7c5cff" stop-opacity="0" />
                </radialGradient>
              </defs>
              <rect width="200" height="160" fill="url(#eduBgA)" />

              <g class="edu-net" stroke="#8d7bff" stroke-opacity="0.5">
                <line class="edu-link" x1="40" y1="38" x2="100" y2="70" />
                <line class="edu-link" x1="165" y1="44" x2="100" y2="70" />
                <line class="edu-link" x1="36" y1="120" x2="60" y2="96" />
                <line class="edu-link" x1="168" y1="118" x2="150" y2="96" />
                <line class="edu-link" x1="100" y1="128" x2="100" y2="92" />
              </g>
              <g class="edu-nodes" fill="#b9aaff">
                <circle class="edu-node" cx="40" cy="38" r="3" />
                <circle class="edu-node" cx="165" cy="44" r="2.5" />
                <circle class="edu-node" cx="36" cy="120" r="2.5" />
                <circle class="edu-node" cx="168" cy="118" r="3" />
                <circle class="edu-node" cx="100" cy="128" r="2.5" />
                <circle class="edu-node" cx="60" cy="96" r="2" />
                <circle class="edu-node" cx="150" cy="96" r="2" />
              </g>

              <circle class="edu-glow" cx="100" cy="70" r="46" fill="url(#eduGlowA)" />

              <g class="edu-cap">
                <polygon points="100,46 152,66 100,86 48,66" fill="#ffffff" />
                <path d="M80 79 v11 a20 7 0 0 0 40 0 v-11 l-20 9 z" fill="#d7d0ff" />
                <circle cx="100" cy="46" r="3" fill="#ffffff" />
                <g class="edu-tassel" stroke="#ffd24a" stroke-width="2" fill="none">
                  <path d="M100 46 L128 53" />
                  <line x1="128" y1="53" x2="128" y2="74" />
                  <circle cx="128" cy="78" r="4" fill="#ffd24a" stroke="none" />
                </g>
              </g>
            </svg>
          </div>
          <div class="content">
            <h3>Master's Degree, Computer Science</h3>
            <p>Eastern Kentucky University | Richmond, KY</p>
            <h4>GPA 3.88</h4>
          </div>
        </div>

        <div class="box">
          <div class="image edu-art edu-art--b" aria-hidden="true">
            <svg class="edu-art-svg" viewBox="0 0 200 160" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="eduBgB" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stop-color="#04122e" />
                  <stop offset="1" stop-color="#0c3f66" />
                </linearGradient>
                <radialGradient id="eduGlowB" cx="0.5" cy="0.5" r="0.5">
                  <stop offset="0" stop-color="#3ec5ff" stop-opacity="0.9" />
                  <stop offset="1" stop-color="#3ec5ff" stop-opacity="0" />
                </radialGradient>
              </defs>
              <rect width="200" height="160" fill="url(#eduBgB)" />

              <g class="edu-net" stroke="#5fd0ff" stroke-opacity="0.5">
                <line class="edu-link" x1="40" y1="38" x2="100" y2="70" />
                <line class="edu-link" x1="165" y1="44" x2="100" y2="70" />
                <line class="edu-link" x1="36" y1="120" x2="60" y2="96" />
                <line class="edu-link" x1="168" y1="118" x2="150" y2="96" />
                <line class="edu-link" x1="100" y1="128" x2="100" y2="92" />
              </g>
              <g class="edu-nodes" fill="#a8e6ff">
                <circle class="edu-node" cx="40" cy="38" r="3" />
                <circle class="edu-node" cx="165" cy="44" r="2.5" />
                <circle class="edu-node" cx="36" cy="120" r="2.5" />
                <circle class="edu-node" cx="168" cy="118" r="3" />
                <circle class="edu-node" cx="100" cy="128" r="2.5" />
                <circle class="edu-node" cx="60" cy="96" r="2" />
                <circle class="edu-node" cx="150" cy="96" r="2" />
              </g>

              <circle class="edu-glow" cx="100" cy="70" r="46" fill="url(#eduGlowB)" />

              <g class="edu-cap">
                <polygon points="100,46 152,66 100,86 48,66" fill="#ffffff" />
                <path d="M80 79 v11 a20 7 0 0 0 40 0 v-11 l-20 9 z" fill="#cfe9ff" />
                <circle cx="100" cy="46" r="3" fill="#ffffff" />
                <g class="edu-tassel" stroke="#ffd24a" stroke-width="2" fill="none">
                  <path d="M100 46 L128 53" />
                  <line x1="128" y1="53" x2="128" y2="74" />
                  <circle cx="128" cy="78" r="4" fill="#ffd24a" stroke="none" />
                </g>
              </g>
            </svg>
          </div>
          <div class="content">
            <h3>Bachelor's Degree, Computer Science</h3>
            <p>Parul University | Gujarat, India</p>
            <h4>GPA 3.75</h4>
          </div>
        </div>
      </div>
    </section>
  `
})
export class Education {}
