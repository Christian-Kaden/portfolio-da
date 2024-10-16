import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
})
export class ContactMeComponent {
  aggrement = false;
  errorMessage = false;

  acceptPrivacyPolicy() {
    this.aggrement = !this.aggrement;
    if (this.aggrement && this.errorMessage) {
      this.errorMessage = !this.errorMessage;
    }
  }
  checkAggrement() {
    if (!this.aggrement && !this.errorMessage) {
      this.errorMessage = !this.errorMessage;
    }
  }
}
