import { Component, OnInit } from '@angular/core';
import { ConnectionDBService } from 'src/app/connection-db.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  constructor(private connectionDBService: ConnectionDBService) {}

  ngOnInit() {
      
  }

  sendVerificationCode() {
    
    const currentUser = this.connectionDBService.getCurrentUser();

    if(currentUser && currentUser.email) {
      const userEmail = currentUser.email;

      this.connectionDBService.sendVerificationCode(userEmail).then(() => {
        Swal.fire('Exito', 'Verification code sent succesfully', 'success');
      }).catch(error => {
        Swal.fire('Error', 'User not authenticater or email not avaailable');
      })
    }

    
  }
}
