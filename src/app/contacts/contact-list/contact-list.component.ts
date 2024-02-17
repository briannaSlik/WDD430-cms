import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent implements OnInit{
  public contacts: Contact[] = []

  onContactSelected(contact: Contact){
    this.contactService.contactSelectedEvent.emit(contact)
  }

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts()
    this.contactService.contactChangedEvent.subscribe((contacts: Contact[])=>{
      this.contacts = contacts;
    })
  }
}
