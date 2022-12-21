import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/services/dataservices/data.service';


import { UpdatenoteComponent } from '../updatenote/updatenote.component';


@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent {
  @Input() NoteList: any;
  @Output() displaytoGetAllNotes = new EventEmitter<string>();
  msg: any;

  Search='';
  subscription : any;
  message :any;
  searchWord:any;
  constructor(public dialog: MatDialog, private dataService:DataService) { }
  
  ngOnInit(): void {
    
    this.subscription = this.dataService.searchNote.subscribe(message => {
      this.message = message;
      console.log("display card search data======", message.data[0]);
      this.searchWord=message.data[0]
      
    })
  }
  openDialog(note: any): void {
    const dialogRef = this.dialog.open(UpdatenoteComponent, {

      width: '400px',
      height: 'auto',

      data: note,

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);

    });


  }
  receiveMsgIconsToDisplay($event: any) {
    console.log("msg icon to display", $event)
    this.msg = $event;
    this.displaytoGetAllNotes.emit(this.msg);

  }
  

}

