import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  title: string = 'Variable footer component';
  img: string = 'assets/fb.png';
  img1: string = 'assets/twiter.logo.png';
  img2: string = 'assets/inlogo.png';
  img3: string = 'assets/world logo.png';
}
