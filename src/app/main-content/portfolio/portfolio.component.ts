import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from '../../dialog/dialog.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, DialogComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  isDialogOpen: boolean = false;
  currentProject: number = 0;

  openDialog(projectIndex: number) {
    this.currentProject = projectIndex;
    this.isDialogOpen = true;
  }

  closeDialog() {
    this.isDialogOpen = false;
  }
}
