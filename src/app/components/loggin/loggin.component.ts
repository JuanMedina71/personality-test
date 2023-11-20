import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnectionDBService } from 'src/app/connection-db.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css'],
  
})
export class LogginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private connectionDBService: ConnectionDBService,
    private router: Router,
    ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }
  ngOnInit() {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password} = this.loginForm.value;

      this.connectionDBService.login({email, password}).then((userCredential) => {
        const user = userCredential.user;
        if(user && user.emailVerified) {        
        Swal.fire('Exito', 'Inicio de sesion exitoso', 'success');
          this.router.navigate(['/register']);          
        }else if (user && !user.emailVerified) {
          this.router.navigate(['/verification']);          
        } else {
          Swal.fire('Error', 'Ha ocurrido un error durante el inicio de sesión en cuanto a verificación', 'error');
        }
      }).catch((error) => {
        if(error.code === 'auth/user-not-found') {
          Swal.fire('Error', 'No se encontró una cuenta con este correo electrónico', 'error');
        } else if (error.code === 'auth/wrong-password') {
          Swal.fire('Error', 'Contraseña incorrecta', 'error');
        } else {
          Swal.fire('Error', 'Ha ocurrido un error durante el inicio de sesión', 'error');
        }
      })

    }else {
      Swal.fire('Error', 'Complete los campos o verifique que su información este correcta', 'error');
    }
  }
}
