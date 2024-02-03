import { Component, EventEmitter, Output } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css'
})
export class DocumentListComponent {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  public documents: Document[] = [
    new Document(1, "First", "The first document", "https://www.icegif.com/wp-content/uploads/2021/11/icegif-1729.gif", null),
    new Document(2, "Second", "The second document", "https://www.icegif.com/wp-content/uploads/2021/11/icegif-1729.gif", null),
    new Document(3, "Third", "The third document", "https://www.icegif.com/wp-content/uploads/2021/11/icegif-1729.gif", null),
    new Document(4, "Fourth", "The fourth document", "https://www.icegif.com/wp-content/uploads/2021/11/icegif-1729.gif", null),
    new Document(5, "Fifth", "The fifth document", "https://www.icegif.com/wp-content/uploads/2021/11/icegif-1729.gif", null)
  ]

  onSelectedDocument(document: Document){
    this.selectedDocumentEvent.emit(document)
  }
}
