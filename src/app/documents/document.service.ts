import { EventEmitter, Injectable } from '@angular/core';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  documents: Document[];
  documentListChangedEvent = new Subject<Document[]>();
  maxDocumentId: number;

  documentSelectedEvent: EventEmitter<Document> = new EventEmitter<Document>();
  // documentChangedEvent: EventEmitter<Document[]> = new EventEmitter<Document[]>();

  constructor() {
    this.documents = MOCKDOCUMENTS;
    this.maxDocumentId = this.getMaxId()
  }

  getDocuments(): Document[] {
    return this.documents.slice();
  }

  getDocument(id: string): Document {
    for (let document of this.documents) {
      if (document.id == id) return document;
    }
    return null;
  }

  getMaxId(): number {
    let maxId = 0;

    for (let document of this.documents){
      let currentId = +document.id;
      if (currentId > maxId) maxId = currentId;
    }

    return maxId
  }

  addDocument(newDocument: Document){
    if (!newDocument) return;

    this.maxDocumentId++;
    newDocument.id = this.maxDocumentId.toString();
    this.documents.push(newDocument);
    let documentsClone = this.documents.slice();

    this.documentListChangedEvent.next(documentsClone);
  }

  updateDocument(originalDocument: Document, newDocument: Document){
    if (!originalDocument || !newDocument) return;

    let pos = this.documents.indexOf(originalDocument);
    if (pos < 0) return;

    newDocument.id = originalDocument.id;
    this.documents[pos] = newDocument;
    let documentsClone = this.documents.slice();
    this.documentListChangedEvent.next(documentsClone);
  }

  deleteDocument(document: Document) {
    if (!document) return;

    const position = this.documents.indexOf(document);
    if (position < 0) return;
  
    this.documents.splice(position, 1);
    // this.documentChangedEvent.emit(this.documents.slice());
    let documentsClone = this.documents.slice()
    this.documentListChangedEvent.next(documentsClone)
  }
}
