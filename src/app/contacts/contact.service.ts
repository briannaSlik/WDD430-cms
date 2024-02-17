import { EventEmitter, Injectable } from '@angular/core';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[];
  contactSelectedEvent: EventEmitter<Contact> = new EventEmitter<Contact>()
  contactChangedEvent: EventEmitter<Contact[]> = new EventEmitter<Contact[]>();


  constructor() {
    this.contacts = MOCKCONTACTS;
   }

   getContacts(): Contact[]{
    return this.contacts.slice();
   }

   getContact(id: string): Contact {
    for (let contact of this.contacts){
      if (contact.id == id){
        return contact;
      }
    }
    return null
   }

   deleteContact(contact: Contact){
    // Make sure contact exits
    if(!contact){
      return;
    }

    // Check if there are any contacts remaining
    const position = this.contacts.indexOf(contact);
    if(position < 0){
      return;
    }

    // Remove document
    this.contacts.splice(position, 1);
    this.contactChangedEvent.emit(this.contacts.slice());
   }
}
