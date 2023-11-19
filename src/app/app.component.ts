import { Component, TemplateRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // we use the BsModalService to gain access to ngx-bootstrap modal component
  providers: [BsModalService],
})
export class AppComponent implements OnInit {
  user!: any;
  modalRef?: BsModalRef;
  public userData = [
    {
      id: 1,
      firstName: 'Emmanuel',
      lastName: 'Luke',
      bodySize: 11,
      description: 'I love art',
    },
    {
      id: 2,
      firstName: 'Ugo',
      lastName: 'Ebuka',
      bodySize: 19,
      description: 'skating is what i probably do with most of my time',
    },
    {
      id: 3,
      firstName: 'hilda',
      lastName: 'tules',
      bodySize: 10,
      description: 'photography is literally world best art',
    },
    {
      id: 4,
      firstName: 'Gerald',
      lastName: 'Emelda',
      bodySize: 12,
      description: 'italian pasta is the best',
    },
  ];

  constructor(private modalService: BsModalService) {}

  ngOnInit() {}

  openModal(viewUserTemplate: TemplateRef<any>, userId: number) {
    if (userId) {
      this.modalRef = this.modalService.show(viewUserTemplate);
      this.user = this.userData.find((x) => x.id === userId);
      console.log(this.user);
    }
  }
  exitModal() {
    this.modalRef?.hide();
  }
}
