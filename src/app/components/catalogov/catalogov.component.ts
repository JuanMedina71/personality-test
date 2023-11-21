import { Component, Inject } from '@angular/core';
import { Firestore, collection, query, where, getDocs, QuerySnapshot } from '@angular/fire/firestore';
import { MatTableDataSource } from '@angular/material/table';
import { vark } from 'src/app/interfaces/vark';
import { DialogVComponent } from '../dialog-v/dialog-v.component';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-catalogov',
  templateUrl: './catalogov.component.html',
  styleUrls: ['./catalogov.component.css']
})
export class CatalogovComponent {
  displayedColumns: string[] = ['nombre', 'tipoPredominante', 'descripcionResultado', 'acciones'];
  dataSource = new MatTableDataSource<vark>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private firestore: Firestore, private dialog: MatDialog){
    
  }

  async ngOnInit() {
    try {
      const q = query(collection(this.firestore, 'testV'));
      const querySnapshot: QuerySnapshot = await getDocs(q);

      const data: vark[] = [];
      querySnapshot.forEach((doc) => {
        // Aquí puedes ajustar el mapeo según tu estructura de datos en Firestore
        const item: vark = {
          nombre: doc.data()['nombre'],
          tipoPredominante: doc.data()['tipoPredominante'],
          descripcionResultado: doc.data()['descripcionResultado']
        };
        data.push(item);
      });

      this.dataSource.data = data; // Asignar los datos recuperados a dataSource
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  
  }

  openDialog(data:vark) {
    const dialogRef = this.dialog.open(DialogVComponent, {
      data: data // Pasar los datos al diálogo
    });

    dialogRef.afterClosed().subscribe(result => {
      // Aquí puedes manejar acciones después de que se cierre el diálogo, si es necesario
    });
  }
}
