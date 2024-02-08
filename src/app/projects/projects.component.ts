import { Component, OnInit } from '@angular/core';
import {
  faAngular,
  faReact,
  faJs,
  faNodeJs,
  faGitAlt,
  faFigma,
  faUnity,
  faAws,
  faCss3,
  faJava,
  faSass,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  faReact = faReact;
  faNodeJs = faNodeJs;
  faAngular = faAngular;
  faJs = faJs;
  faGitAlt = faGitAlt;
  faFigma = faFigma;
  faUnity = faUnity;
  faAws = faAws;
  faCss3 = faCss3;
  faDatabase = faDatabase;
  faJava = faJava;
  faSass = faSass;

  ngOnInit(): void {}
}
