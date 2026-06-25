import { Component, input } from '@angular/core';

@Component({
  selector: 'app-project-art',
  template: `
    <svg class="pcard-art-svg" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <!-- window frame -->
      <rect x="34" y="40" width="252" height="128" rx="12" fill="#ffffff" fill-opacity="0.07" stroke="#ffffff" stroke-opacity="0.22" />
      <line x1="34" y1="62" x2="286" y2="62" stroke="#ffffff" stroke-opacity="0.18" />
      <circle cx="48" cy="51" r="3.2" fill="#ff5f57" />
      <circle cx="60" cy="51" r="3.2" fill="#febc2e" />
      <circle cx="72" cy="51" r="3.2" fill="#28c840" />

      @switch (art()) {
        @case ('modernization') {
          <g>
            <g fill="#5ad17a" fill-opacity="0.85">
              <rect x="50" y="80" width="60" height="6" rx="3" />
              <rect x="50" y="92" width="44" height="6" rx="3" />
              <rect x="50" y="104" width="54" height="6" rx="3" />
              <rect x="50" y="116" width="38" height="6" rx="3" />
              <rect class="pa-blink" x="92" y="116" width="8" height="6" rx="1" fill="#aef5c4" />
            </g>
            <g class="pa-arrow" stroke="#ffffff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <line x1="146" y1="118" x2="172" y2="118" />
              <polyline points="164,110 174,118 164,126" />
            </g>
            <g>
              <rect x="186" y="78" width="84" height="12" rx="3" fill="#7aa7ff" />
              <rect x="186" y="96" width="38" height="44" rx="4" fill="#ffffff" fill-opacity="0.5" />
              <rect x="232" y="96" width="38" height="44" rx="4" fill="#ffffff" fill-opacity="0.28" />
              <rect x="186" y="146" width="60" height="9" rx="4" fill="#7aa7ff" fill-opacity="0.8" />
            </g>
            <g class="pa-pulse">
              <path d="M256 132 l12 4 v9 c0 7 -6 11 -12 13 c-6 -2 -12 -6 -12 -13 v-9 z" fill="#4fe3c1" />
              <polyline points="250,148 255,153 263,143" stroke="#06281d" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round" />
            </g>
          </g>
        }
        @case ('surety') {
          <g>
            <rect x="116" y="74" width="92" height="82" rx="6" fill="#ffffff" fill-opacity="0.92" />
            <g fill="#9aa4c4">
              <rect x="126" y="86" width="60" height="6" rx="3" />
              <rect x="126" y="98" width="72" height="5" rx="2.5" />
              <rect x="126" y="108" width="72" height="5" rx="2.5" />
              <rect x="126" y="118" width="48" height="5" rx="2.5" />
            </g>
            <polyline class="pa-draw" points="128,138 138,148 160,128" stroke="#1faa6a" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round" />
            <g>
              <circle class="pa-spin" cx="200" cy="146" r="16" fill="none" stroke="#ffd24a" stroke-width="2.4" stroke-dasharray="4 4" />
              <circle cx="200" cy="146" r="10" fill="#ffd24a" />
              <path d="M200 139 l2.2 4.6 5 .6 -3.7 3.5 .9 5 -4.4 -2.4 -4.4 2.4 .9 -5 -3.7 -3.5 5 -.6 z" fill="#06281d" />
            </g>
            <g fill="#ffd24a">
              <ellipse class="pa-float" cx="84" cy="122" rx="9" ry="4" />
              <ellipse class="pa-float delay1" cx="92" cy="106" rx="8" ry="3.6" />
              <ellipse class="pa-float delay2" cx="80" cy="92" rx="7" ry="3.2" />
            </g>
          </g>
        }
        @case ('activity') {
          <g>
            <g fill="#ffffff" fill-opacity="0.08" stroke="#ffffff" stroke-opacity="0.18">
              <rect x="48" y="72" width="68" height="86" rx="6" />
              <rect x="126" y="72" width="68" height="86" rx="6" />
              <rect x="204" y="72" width="68" height="86" rx="6" />
            </g>
            <g>
              <rect x="56" y="82" width="52" height="16" rx="3" fill="#b9aaff" />
              <rect x="56" y="104" width="52" height="16" rx="3" fill="#8fd2ff" />
              <rect x="212" y="82" width="52" height="16" rx="3" fill="#7cffb2" />
            </g>
            <g class="pa-slide">
              <rect x="56" y="126" width="52" height="18" rx="3" fill="#ffffff" fill-opacity="0.9" />
              <polyline points="62,135 67,140 78,129" stroke="#3b1d7a" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <polyline class="pa-blink" points="216,112 222,118 234,104" stroke="#7cffb2" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" />
          </g>
        }
      }
    </svg>
  `
})
export class ProjectArt {
  readonly art = input.required<string>();
}
