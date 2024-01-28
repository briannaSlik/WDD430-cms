import { Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrl: './message-edit.component.css'
})
export class MessageEditComponent {
  // subjectText = 'Test';
  // messageText = 'TestText';
  @ViewChild('subject', {static: true}) subject: ElementRef;
  @ViewChild('msgText', {static: true}) msgText: ElementRef;

  @Output() addMessageEvent = new EventEmitter<Message>();

  currentSender: string = "BriAnna Slik"

  onSendMessage(){
    let subject: string = this.subject.nativeElement.value;
    let message: string = this.msgText.nativeElement.value;
    let newMessage: Message = new Message(1, subject, message, this.currentSender)
    this.addMessageEvent.emit(newMessage);
  }

  onClear(){
    this.subject.nativeElement.value = "";
    this.msgText.nativeElement.value = "";
  }
}
