import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
  }
  isShowDivIf = true; 
  
  toggleDisplayDivIf(){
    this.isShowDivIf = !this.isShowDivIf;
  }
  ngOnInit(): void {
    
    
  }


}
