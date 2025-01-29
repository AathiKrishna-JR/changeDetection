import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject, input } from '@angular/core';
import { MessagesService } from '../message.service';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class MessagesListComponent implements OnInit{
  
  
  private messageService = inject(MessagesService);
  private cdRef = inject(ChangeDetectorRef);
  messages: string[] = []
  ngOnInit(): void {
    this.messageService.messages$.subscribe((messages) => {
      this.messages = messages;
      this.cdRef.markForCheck();
    })
  }


  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
