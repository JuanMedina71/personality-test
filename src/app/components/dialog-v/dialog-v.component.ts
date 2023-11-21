import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'; // Importar MatDialogRef
import { vark } from 'src/app/interfaces/vark';
import { DialogJComponent } from '../dialog-j/dialog-j.component';

@Component({
  selector: 'app-dialog-v',
  templateUrl: './dialog-v.component.html',
  styleUrls: ['./dialog-v.component.css'],
})
export class DialogVComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: vark,
    public dialogRef: MatDialogRef<DialogJComponent> // Inyectar MatDialogRef
  ) { }

  guardarCambios() {
    // Aquí podrías realizar validaciones y procesamiento adicional si es necesario
    
    // Luego, cierra el diálogo sin pasar ningún dato
    this.dialogRef.close(this.data);
  }
}