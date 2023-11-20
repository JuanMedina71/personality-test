import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent {
  constructor(private router: Router) {

  }

  redirectToPage(page: string): void {
    switch(page) {
      case 'admin':
        this.router.navigate(['/loggin']);
        break;
      case 'varkTest':
        this.router.navigate(['']);
        break;
      case 'jungMayerBriggsTest':
        this.router.navigate(['']);
        break;
    }
  }
}
