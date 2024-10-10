import { Component } from '@angular/core';
import { JoinComponent } from './join/join.component';
import { CommonModule } from '@angular/common';
import { DialogComponent } from '../../dialog/dialog.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [JoinComponent, CommonModule, DialogComponent],
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
