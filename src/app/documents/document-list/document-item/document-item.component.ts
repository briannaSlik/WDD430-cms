import { Component, Input } from '@angular/core';
import { Document } from '../../document.model';

@Component({
  selector: 'cms-document-item',
  templateUrl: './document-item.component.html',
  styleUrl: './document-item.component.css'
})
export class DocumentItemComponent {
  // @Input() document: Document = new Document(1, "Test Document", "Just a test", "../doc", null)
  @Input() document: Document;
}
