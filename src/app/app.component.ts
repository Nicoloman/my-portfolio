import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'niqloma-sketchbook';
  loading: boolean = true;

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function () {
      const dots = document.querySelectorAll('.dot');

      window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;

        // Determine which section is currently in view
        // For simplicity, let's assume there are three sections
        const sectionHeight = window.innerHeight;
        const section1End = sectionHeight * 1.8;
        const section2End = sectionHeight * 4.5;

        // Update the active state of dots based on scroll position
        if (scrollPosition < section1End) {
          setActiveDot(0);
        } else if (scrollPosition < section2End) {
          setActiveDot(1);
        } else {
          setActiveDot(2);
        }
      });

      function setActiveDot(index: number) {
        dots.forEach((dot, i) => {
          if (i === index) {
            dot.classList.add('active');
          } else {
            dot.classList.remove('active');
          }
        });
      }
    });
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();

        const anchorElement = e.target as HTMLElement | null; // Cast e.target to HTMLElement or null
        const targetId = anchorElement?.getAttribute('href')?.substring(1); // Use optional chaining
        const targetElement = targetId
          ? document.getElementById(targetId)
          : null; // Check if targetId is truthy

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  loaderAnimation(value: boolean) {
    console.log('Hola?');
    this.loading = false;
  }
}
