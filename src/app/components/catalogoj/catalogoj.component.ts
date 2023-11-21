import { Component } from '@angular/core';
import { Firestore, collection, query, where, getDocs, QuerySnapshot } from '@angular/fire/firestore';
import { MatTableDataSource } from '@angular/material/table';
import { personalidad } from 'src/app/interfaces/personaldad';


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

  constructor(private firestore: Firestore){
    
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
}