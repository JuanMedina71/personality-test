import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { personalidad } from 'src/app/interfaces/personaldad';

@Component({
  selector: 'app-dialog-j',
  templateUrl: './dialog-j.component.html',
  styleUrls: ['./dialog-j.component.css']
})
export class DialogJComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: personalidad,
    public dialogRef: MatDialogRef<DialogJComponent> // Inyectar MatDialogRef
  ) { }

  guardarCambios() {
    // Aquí podrías realizar validaciones y procesamiento adicional si es necesario
    
    // Luego, cierra el diálogo sin pasar ningún dato
    this.dialogRef.close(this.data);
  }
}

