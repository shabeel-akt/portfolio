import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    const elements = document.querySelectorAll('.lerp');
    const initialDelay = 0.13;
    const delayDecrement = 0.01;
    const scrollSpeed = 6;

    elements.forEach(container => {
      // Get the text content of the element
      const text = container.textContent || '';

      // Wrap each letter in a span with specific attributes
      const updatedHtml = text.split('').map((letter, index) => {
        const delay = (initialDelay - (delayDecrement * index)).toFixed(2);
        return `<span data-scroll="" data-scroll-delay="${delay}" data-scroll-speed="${scrollSpeed}">${letter}</span>`;
      }).join('');

      // Set the updated HTML back to the container
      container.innerHTML = updatedHtml;
    });
  }
}
