import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'cms-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css'
})
export class ContactDetailComponent implements OnInit{
  contact: Contact;

  constructor(private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      this.contact = this.contactService.getContact(params['id'])
    })
  }

  onDelete(contact: Contact){
    this.contactService.deleteContact(contact)
    this.router.navigateByUrl('/contacts')
  }
}