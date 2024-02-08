import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent implements OnInit {
  @Output() showLoader: boolean = true;
  @Output() loaderAnimation = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.addNewItem();
    }, 2000);
  }

  addNewItem() {
    this.showLoader = false;
    this.loaderAnimation.emit(false);
  }
}
