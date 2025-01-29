import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, OnInit, inject, input } from '@angular/core';
import { MessagesService } from '../message.service';
import { Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  imports : [AsyncPipe],
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class MessagesListComponent implements OnInit{
  

  private messageService = inject(MessagesService);
  messages$ = this.messageService.messages$
  // private cdRef = inject(ChangeDetectorRef);
  //private destroyRef = inject(DestroyRef);
  //messages: string[] = []
  ngOnInit(): void {
    // const subscription =this.messageService.messages$.subscribe((messages) => {
    //   this.messages = messages;
    //   this.cdRef.markForCheck();
    // })
    // this.destroyRef.onDestroy(()=>{
    //     subscription.unsubscribe();
    // });
  }


  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
