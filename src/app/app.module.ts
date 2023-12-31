import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { CatalogojComponent } from './components/catalogoj/catalogoj.component';
import { CatalogovComponent } from './components/catalogov/catalogov.component';
import { DashboardJungComponent } from './components/dashboard-jung/dashboard-jung.component';
import { DashboardVarkComponent } from './components/dashboard-vark/dashboard-vark.component';
import { DialogJComponent } from './components/dialog-j/dialog-j.component';
import { DialogVComponent } from './components/dialog-v/dialog-v.component';
import { LogginComponent } from './components/loggin/loggin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PublicComponent } from './components/public/public.component';
import { RegisterComponent } from './components/register/register.component';
import { ResultadosVarkComponent } from './components/resultados-vark/resultados-vark.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { TestComponent } from './components/test/test.component';
import { VarkComponent } from './components/vark/vark.component';
import { VerificationComponent } from './components/verification/verification.component';


@NgModule({
  declarations: [
    AppComponent,
    LogginComponent,
    VarkComponent,
    TestComponent,
    NavbarComponent,
    RegisterComponent,
    VerificationComponent,
    PublicComponent,
    AdminPanelComponent,
    DashboardJungComponent,
    DashboardVarkComponent,
    ResultadosComponent,
    ResultadosVarkComponent,
    CatalogojComponent,
    CatalogovComponent,
    DialogJComponent,
    DialogVComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    provideFirebaseApp(() => initializeApp({"projectId":"insightiq-8a302","appId":"1:1061784780582:web:43736fd73e766f5af70be7","storageBucket":"insightiq-8a302.appspot.com","apiKey":"AIzaSyAExb7g-pbihQqNGNSqZa9m8PS40N-Cawg","authDomain":"insightiq-8a302.firebaseapp.com","messagingSenderId":"1061784780582"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
