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
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css', './experience01.component.css'],
})
export class ExperienceComponent implements OnInit {
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

  ngOnInit(): void {}
}
