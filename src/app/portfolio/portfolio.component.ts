import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
ngOnInit(){
  document.addEventListener("fullscreenchange", function () {
    var video: any = document.getElementById("video-web");
    if (document.fullscreenElement === video ) {
      video.controls = false; // Hide controls when entering fullscreen
    }
  });
  
}
}
