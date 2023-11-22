import { Component } from '@angular/core';
import { Firestore, collection, query, where, getDocs, QuerySnapshot, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { MatTableDataSource } from '@angular/material/table';
import { personalidad } from 'src/app/interfaces/personaldad';
import { DialogJComponent } from '../dialog-j/dialog-j.component';
import {
  MatDialog,
} from '@angular/material/dialog';

@Component({
  selector: 'app-catalogoj',
  templateUrl: './catalogoj.component.html',
  styleUrls: ['./catalogoj.component.css']
})
export class CatalogojComponent {
  displayedColumns: string[] = ['nombre', 'result', 'descripcion', 'acciones'];
  dataSource = new MatTableDataSource<personalidad>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private firestore: Firestore, private dialog: MatDialog){
    
  }
  
  async ngOnInit() {
    try {
      const q = query(collection(this.firestore, 'testP'));
      const querySnapshot: QuerySnapshot = await getDocs(q);

      const data: personalidad[] = [];
      querySnapshot.forEach((doc) => {
        // Aquí puedes ajustar el mapeo según tu estructura de datos en Firestore
        const item: personalidad = {
          nombre: doc.data()['nombre'],
          result: doc.data()['result'],
          descripcion: doc.data()['descripcion']
        };
        data.push(item);
      });

      this.dataSource.data = data; // Asignar los datos recuperados a dataSource
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  
  }
  
  openDialog(data:personalidad) {
    const dialogRef = this.dialog.open(DialogJComponent, {
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
    const querySnapshot = await getDocs(query(collection(this.firestore, 'testP'), where('nombre', '==', nombre)));
    querySnapshot.forEach(async (docSnapshot) => {
      const documentRef = doc(this.firestore, 'testP', docSnapshot.id);
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
    const querySnapshot = await getDocs(query(collection(this.firestore, 'testP'), where('nombre', '==', nombre)));
    querySnapshot.forEach(async (docSnapshot) => {
      const documentRef = doc(this.firestore, 'testP', docSnapshot.id);
      try {
        await deleteDoc(documentRef);
        console.log('Documento eliminado correctamente');
        this.ngOnInit
        window.location.reload()
      } catch (error) {
        console.error('Error al eliminar el documento:', error);
        throw error;
      }
    });
  }
}