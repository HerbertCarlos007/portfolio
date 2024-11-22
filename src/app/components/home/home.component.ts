import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, AboutMeComponent, SkillsComponent, ProjectsComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
