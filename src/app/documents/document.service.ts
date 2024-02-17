import { EventEmitter, Injectable } from '@angular/core';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  documents: Document[];
  documentSelectedEvent: EventEmitter<Document> = new EventEmitter<Document>();
  documentChangedEvent: EventEmitter<Document[]> = new EventEmitter<Document[]>();

  constructor() { 
    this.documents = MOCKDOCUMENTS;
  }

  getDocuments(): Document[]{
    return this.documents.slice();
  }

  getDocument(id: string): Document{
    for (let document of this.documents){
      if (document.id == id){
        return document;
      }
    }
    return null;
   }

   deleteDocument(document: Document){
    
    // Make sure document exits
    if(!document){
      return;
    }

    // Check if there are any documents remaining
    const position = this.documents.indexOf(document);
    if(position < 0){
      return;
    }

    // Remove document and emit event 
    this.documents.splice(position, 1);
    this.documentChangedEvent.emit(this.documents.slice());
   }
}
