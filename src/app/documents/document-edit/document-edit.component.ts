import { Component, OnInit } from '@angular/core';
import { Document } from '../document.model';
import { NgForm } from '@angular/forms';
import { DocumentService } from '../document.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'cms-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrl: './document-edit.component.css'
})
export class DocumentEditComponent implements OnInit{
  originalDocument: Document;
  document: Document;
  editMode: boolean = false;

  constructor(private documentService: DocumentService, 
    private router: Router, 
    private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        let id = params['id']
        if (!id){
          this.editMode = false;
          return;
        }

        this.originalDocument = this.documentService.getDocument(id)
        if (!this.originalDocument){
          return;
        }
        this.editMode = true;
        this.document = JSON.parse(JSON.stringify(this.originalDocument));
      }
    )
  }

  onSubmit(form: NgForm){
    const value = form.value;
    let newDocument = new Document("1", value.name, value.description, value.url, null);

    if(this.editMode){
      this.documentService.updateDocument(this.originalDocument, newDocument);
    } else{
      this.documentService.addDocument(newDocument)
    };

    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
