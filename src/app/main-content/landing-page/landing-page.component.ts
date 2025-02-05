import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, TitleComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {}
