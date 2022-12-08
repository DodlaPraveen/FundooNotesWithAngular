import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from 'src/app/services/noteservices/note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent {
  createForm!: FormGroup;
  panelOpenState = true;
  Show = false;
  title: any;
  description: any;
  constructor(private formBuilder: FormBuilder, private note : NoteService) { }
  

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', Validators.required],

    })

  }
  isshow() {
    this.Show = true;
  }
  close() {
    this.Show = false;
    if (this.createForm.valid) {
      let payload = {
        title: this.createForm.value.title,
        note: this.createForm.value.description
      }
      console.log(payload)
      this.note.addnote(payload).subscribe((response:any) =>{
        console.log("addnote succesfully", response)
        localStorage.getItem('token')
      })
     
    }
  }
  
}
  
