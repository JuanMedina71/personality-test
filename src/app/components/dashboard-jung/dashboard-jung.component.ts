import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboard-jung',
  templateUrl: './dashboard-jung.component.html',
  styleUrls: ['./dashboard-jung.component.css']
})
export class DashboardJungComponent implements OnInit{
  //...
  @ViewChild('graficaJung') graficaJung!: ElementRef;

  constructor(private firestore: Firestore) { }

  ngOnInit(): void {
    this.obtenerDatosDesdeFirestore();
  }

  async obtenerDatosDesdeFirestore() {
      const testPCollection = collection(this.firestore, 'testP'); // Reemplaza 'testP' con el nombre real de tu colección

      const querySnapshot = await getDocs(testPCollection);
      const datos = querySnapshot.docs.map(doc => doc.data());

      // Aquí puedes manejar los datos recuperados de Firestore
      console.log(datos);

      // Llama a la función para procesar y mostrar la gráfica
      this.mostrarGrafica(datos);
  }
  mostrarGrafica(datos: any[]) {
    const results = datos.map(item => item.result);
    const resultCounts = this.contarResultados(results);

    Chart.register(...registerables);

    const ctx = this.graficaJung.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Object.keys(resultCounts),
        datasets: [{
          label: 'Resultados de Test Jung',
          data: Object.values(resultCounts),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          x: {
            type: 'category'
          },
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Resultados de Test Jung'
          },
          tooltip: {
            enabled: true,
            mode: 'index',
            intersect: false
          }
        }
      }
    });
  }
  contarResultados(results: string[]): { [key: string]: number } {
    return results.reduce((countMap, result) => {
      countMap[result] = (countMap[result] || 0) + 1;
      return countMap;
    }, {} as { [key: string]: number });
  }
}
