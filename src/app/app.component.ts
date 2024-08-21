import { Component, OnInit } from '@angular/core';
import LocomotiveScroll from 'locomotive-scroll';
import { ResizeObserver } from '@juggle/resize-observer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'portfolio';
  private scroll: any;

  ngOnInit(): void {
    window.addEventListener('load', () => {
      this.scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
      });

      // If you want to update scroll after images load
      this.scroll.update();
    });
  }
}
