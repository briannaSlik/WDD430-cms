import { Component, ElementRef, ViewChild} from '@angular/core';
import { Message } from '../message.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'cms-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrl: './message-edit.component.css'
})
export class MessageEditComponent {
  @ViewChild('subject', {static: true}) subject: ElementRef;
  @ViewChild('msgText', {static: true}) msgText: ElementRef;

  constructor(private messageService: MessageService) {}

  onSendMessage(){
    let subject: string = this.subject.nativeElement.value;
    let message: string = this.msgText.nativeElement.value;
    let newMessage: Message = new Message('6', subject, message, '1')
    this.messageService.addMessage(newMessage);    
  }

  onClear(){
    this.subject.nativeElement.value = "";
    this.msgText.nativeElement.value = "";
  }
}
