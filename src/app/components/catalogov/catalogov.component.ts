import { Component } from '@angular/core';
import { Firestore, collection, query, updateDoc, getDocs, QuerySnapshot , doc, DocumentReference, where, deleteDoc} from '@angular/fire/firestore';
import { MatTableDataSource } from '@angular/material/table';
import { vark } from 'src/app/interfaces/vark';
import { DialogVComponent } from '../dialog-v/dialog-v.component';
import {
  MatDialog,
} from '@angular/material/dialog';

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
      if(result){
        try{
          this.actualizarDocumentoPorNombre(result.nombre, result)
          console.log('Datos actualizados correctamente en Firebase');
        }catch{
          console.error('Error al actualizar datos:');
        }
      }
    });
  }

  async actualizarDocumentoPorNombre(nombre: string, newData: any): Promise<void> {
    const querySnapshot = await getDocs(query(collection(this.firestore, 'testV'), where('nombre', '==', nombre)));
    querySnapshot.forEach(async (docSnapshot) => {
      const documentRef = doc(this.firestore, 'testV', docSnapshot.id);
      try {
        await updateDoc(documentRef, newData);
        console.log('Documento actualizado correctamente');
      } catch (error) {
        console.error('Error al actualizar el documento:', error);
        throw error;
      }
    });
  }

  async eliminarDocumentoPorNombre(nombre: string): Promise<void> {
    const querySnapshot = await getDocs(query(collection(this.firestore, 'testV'), where('nombre', '==', nombre)));
    querySnapshot.forEach(async (docSnapshot) => {
      const documentRef = doc(this.firestore, 'testV', docSnapshot.id);
      try {
        await deleteDoc(documentRef);
        console.log('Documento eliminado correctamente');
      } catch (error) {
        console.error('Error al eliminar el documento:', error);
        throw error;
      }
    });
  }
}

