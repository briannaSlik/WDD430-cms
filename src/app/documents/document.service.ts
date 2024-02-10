import { EventEmitter, Injectable } from '@angular/core';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  documents: Document[];
  documentSelectedEvent: EventEmitter<Document> = new EventEmitter<Document>()

  constructor() { 
    this.documents = MOCKDOCUMENTS;
  }

  getDocuments(): Document[]{
    return this.documents.slice()
  }

  getDocument(id: string): Document{
    this.documents.forEach((document) => {
      if (document.id === id){
        return document;
      }
    })

    return null;
  }


}
