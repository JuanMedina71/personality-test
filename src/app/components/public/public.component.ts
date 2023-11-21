import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent {
  nombre: string = '';
  texto: string = '';
  constructor(private router: Router) {

  }

  redirectToPage(page: string): void {
    switch(page) {
      case 'admin':
        this.router.navigate(['/loggin']);
        break;
      case 'vark':
        this.router.navigate(['']);
        break;
      case 'jung':
        this.router.navigate(['/testP']);
        break;
    }
  }

  enviarDuda() {
    const cuerpoCorreo = `Nombre: ${this.nombre}\n\nDuda:\n${this.texto}`;

    // Simplemente abre el cliente de correo predeterminado del usuario con los datos del formulario
    window.location.href = `mailto:ghostt71@hotmail.com?subject=Duda de soporte&body=${encodeURIComponent(cuerpoCorreo)}`;

    // Muestra un mensaje de éxito
    Swal.fire('Manda tu duda', 'Se abrio la ventana de correo para que nos mandes tu duda', 'info');
  }
}
