import { Component, ViewEncapsulation } from '@angular/core';
import { CoverSectionComponent } from './components/cover-section/cover-section.component';
import { TechStackComponent } from './components/tech-stack-seciton/tech-stack.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { ExperienceSectionComponent } from './components/experience-section/experience-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    CoverSectionComponent,
    TechStackComponent,
    ProjectsSectionComponent,
    ExperienceSectionComponent,
    ContactSectionComponent,
    AboutSectionComponent,
  ],
})
export class LandingComponent {}
