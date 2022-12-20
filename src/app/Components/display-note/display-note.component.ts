import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


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



  constructor(public dialog: MatDialog) { }

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

