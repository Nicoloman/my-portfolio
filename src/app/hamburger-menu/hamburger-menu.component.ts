import { Component } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrl: './hamburger-menu.component.css'
})
export class HamburgerMenuComponent {
ngOnInit(){
  document.addEventListener('DOMContentLoaded', function() {
    // Toggle menu
    const toggleButton = document.querySelector('.toggle');
    toggleButton?.addEventListener('click', function() {
      const checkbox = document.querySelector('.contenedor input[type="checkbox"]') as HTMLInputElement;
      if (checkbox) {
        checkbox.checked = !checkbox.checked;
      }
    });
  
    // Uncheck checkbox when <a> tag is clicked
    const anchorTags = document.querySelectorAll('.contenedor a');
    anchorTags.forEach(function(a) {
      a.addEventListener('click', function() {
        const checkbox = document.querySelector('.contenedor input[type="checkbox"]') as HTMLInputElement;
        if (checkbox) {
          checkbox.checked = false;
        }
      });
    });
  });
  
  
}

}
