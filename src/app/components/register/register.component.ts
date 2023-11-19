import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnectionDBService } from 'src/app/connection-db.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private connectionDBService: ConnectionDBService, private router: Router, private afAuth: Auth) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email,Validators.pattern(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)]],
      password: ['', [Validators.required]],

    })
  }



  onSubmit() {
    if(this.registerForm.valid) {
      const { email, password } = this.registerForm.value;

      this.connectionDBService.register({ email, password }).then((userCredential) => {
        Swal.fire('Exito', 'Registro Exitoso', 'success');
        this.router.navigate(['loggin']);
      }).catch((error) => {
        if(error.code === 'auth/email-already-in-use') {
          Swal.fire('Error', 'Ya existe una cuenta con este correo electronico', 'error');
        } else {
          Swal.fire('Error', 'Ha ocurrido un error durante el registro', 'error');
        }
      });
    } else {
      Swal.fire('Error', 'Por favor, completa los campos correctamente', 'error');
    }
  }

}
