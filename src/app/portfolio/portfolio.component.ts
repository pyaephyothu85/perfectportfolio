import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  title: string= "Variable portfolio component";
  img1: string= "assets/cabin.png";
  img2: string= "assets/cake.png";
  img3: string= "assets/circus.png";
  img4: string= "assets/game.png";
  img5: string= "assets/safe.png";
  img6: string= "assets/submarine.png";
}
