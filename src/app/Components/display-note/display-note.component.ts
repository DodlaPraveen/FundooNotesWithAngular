import { Component,  Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


import { UpdatenoteComponent } from '../updatenote/updatenote.component';


@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent {
  @Input() NoteList:any;

  msg: any;
  

  constructor(public dialog: MatDialog) { }

  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdatenoteComponent,{

      width: '400px',
      height: 'auto',
      
     data:note,

    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      
    });

  
  }

}

