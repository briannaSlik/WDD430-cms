import { Component } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css'
})
export class MessageListComponent {
  public messages: Message[] = [
    new Message(1, "Test Message", "Wow it worked!", "BriAnna Slik"),
    new Message(2, "Another Test", "Woo hoo! A second one!", "BriAnna Slik"),
    new Message(3, "You'd never guess", "...but it's another test!", "BriAnna Slik")
  ];

  onAddMessage(message: Message){
    this.messages.push(message);
  }
}
