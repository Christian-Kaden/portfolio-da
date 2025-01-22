import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  currentReference = true;

  cards = [
    {
      text: 'Lukas has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.',
      author: 'H.Janisch - Team Partner',
    },
    {
      text: 'I had the good fortune of working with Lukas in a group project at the Developer Akademie that involved a lot of effort. He always stayed calm, cool, and focused, and made sure our team was set up for success.',
      author: 'A. Fischer - Team Partner',
    },
    {
      text: 'Our project benefited enormously from Simon efficient way of working.',
      author: 'T.Schulz - Frontend Developer',
    },
  ];

  currentCardIndex = 0;

  // Change to the previous card
  prevCard() {
    this.currentCardIndex =
      (this.currentCardIndex - 1 + this.cards.length) % this.cards.length;
  }

  // Change to the next card
  nextCard() {
    this.currentCardIndex = (this.currentCardIndex + 1) % this.cards.length;
  }

  // Go directly to a specific card
  goToCard(index: number) {
    this.currentCardIndex = index;
  }
}
