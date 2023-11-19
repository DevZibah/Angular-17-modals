import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, AppComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent implements OnInit {
  @Input() user: any;
  @Input() exitModal = (): void => {};
  ngOnInit(): void {
    this.exitModal();
  }
}
