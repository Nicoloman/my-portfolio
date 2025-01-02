import { Component, OnInit } from '@angular/core';
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faInstagram = faInstagram;
  faGlobe = faGlobe;

  ngOnInit(): void {
    let lastScrollTop = 0;
    let isScrollingDown = false;

    const navbar: any = document.querySelector('.navbar');
    const navbarHeight = navbar.offsetHeight;
    window.addEventListener('scroll', () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Determine scroll direction
      if (scrollTop > lastScrollTop) {
        isScrollingDown = true;
      } else {
        isScrollingDown = false;
      }

      // Update last scroll position
      lastScrollTop = scrollTop;

      // Show/hide navbar with different animation durations
      if (isScrollingDown) {
        navbar.style.transitionDuration = '1.5s'; // Hide navbar with longer duration
        navbar.style.top = `-${navbarHeight}px`;
      } else {
        navbar.style.transitionDuration = '0.5s'; // Show navbar with shorter duration
        navbar.style.top = '0';
      }
    });
  }
}
