import { Component } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'cms-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css'
})
export class ContactDetailComponent {
  // public contact = new Contact(1, "R. Kent Jackson", "jacksonk@byui.edu", "208-296-3771", "../../../assets/images/jacksonk.jpg", null)
  public contact = new Contact(1, "", "", "", "", null)
}
