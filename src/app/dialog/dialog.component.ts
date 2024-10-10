import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  @Input() currentProject: number = 0;
  @Output() closeDialogEvent = new EventEmitter<void>();

  projects = [
    {
      number: '01',
      title: 'Join',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      skills: [5, 1, 0],
      imageUrl: 'assets/img/portfolio-join-screen.png',
      linkGitHub: '',
      linkLiveTest: '',
    },
    {
      number: '02',
      title: 'El Pollo Loco',
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      skills: [5, 1, 0],
      imageUrl: 'assets/img/portfolio-el-pollo-loco-screen.png',
      linkGitHub: '',
      linkLiveTest: '',
    },
    {
      number: '03',
      title: 'DABubble',
      description:
        'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      skills: [0, 1, 2, 3, 4],
      imageUrl: 'assets/img/portfoilo-dabubble-screen.png',
      linkGitHub: '',
      linkLiveTest: '',
    },
  ];

  skills = [
    {
      skillTitle: 'CSS',
      skillImageUrl: 'assets/img/dialog-CSS.svg',
    },
    {
      skillTitle: 'HTML',
      skillImageUrl: 'assets/img/dialog-HTML.svg',
    },
    {
      skillTitle: 'Firebase',
      skillImageUrl: 'assets/img/dialog-Firebase.svg',
    },
    {
      skillTitle: 'Angular',
      skillImageUrl: 'assets/img/dialog-Angular.svg',
    },
    {
      skillTitle: 'TypeScript',
      skillImageUrl: 'assets/img/dialog-TypeScript.svg',
    },
    {
      skillTitle: 'JavaScript',
      skillImageUrl: 'assets/img/dialog-JavaScript.svg',
    },
  ];

  nextProject() {
    if (this.currentProject == 2) this.currentProject = -1;
    if (this.currentProject < this.projects.length - 1) {
      this.currentProject++;
    }
  }

  closeDialog() {
    this.closeDialogEvent.emit();
  }
}
