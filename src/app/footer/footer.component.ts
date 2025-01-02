import { Component } from '@angular/core';
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe, faIdCard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  faLinkedin = faLinkedin;
  faIdCard = faIdCard;
  faGithub = faGithub;
  faInstagram = faInstagram;
  faGlobe = faGlobe;
  faEnvelope = faEnvelope;
}
