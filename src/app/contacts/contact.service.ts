import { EventEmitter, Injectable } from '@angular/core';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  maxContactId: number;
  contacts: Contact[];

  contactListChangedEvent = new Subject<Contact[]>();
  contactSelectedEvent: EventEmitter<Contact> = new EventEmitter<Contact>()
  // contactChangedEvent: EventEmitter<Contact[]> = new EventEmitter<Contact[]>();


  constructor() {
    this.contacts = MOCKCONTACTS;
    this.maxContactId = this.getMaxId()
   }

   getMaxId(): number{
    let maxId = 0;

    for (let contact of this.contacts){
      let currentId = +contact.id;
      if (currentId > maxId) maxId = currentId;
    }

    return maxId
   }

   getContacts(): Contact[]{
    return this.contacts.slice();
   }

   getContact(id: string): Contact {
    for (let contact of this.contacts){
      if (contact.id == id) return contact; 
    }
    return null
   }

   addContact(newContact: Contact){
    if (!newContact) return;

    this.maxContactId++
    newContact.id = this.maxContactId.toString();
    this.contacts.push(newContact);
    let contactsClone = this.contacts.slice();

    this.contactListChangedEvent.next(contactsClone);
   }

   updateContact(originalContact: Contact, newContact: Contact){
    if (!originalContact || !newContact) return;

    let pos = this.contacts.indexOf(originalContact);
    if (pos < 0) return;

    newContact.id = originalContact.id;
    this.contacts[pos] = newContact;
    let contactsClone = this.contacts.slice()
    this.contactListChangedEvent.next(contactsClone)
   }

   deleteContact(contact: Contact){
    if (!contact) return;

    const position = this.contacts.indexOf(contact);
    if (position < 0) return;
    
    this.contacts.splice(position, 1);
    // this.contactChangedEvent.emit(this.contacts.slice());
    let contactsClone = this.contacts.slice()
    this.contactListChangedEvent.next(contactsClone);
   }
}
