import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './sitio/menu/menu.component';
import { BodyComponent } from './sitio/body/body.component';
import { FooterComponent } from './sitio/footer/footer.component';
import { HombreComponent } from './sitio/hombre/hombre.component';
import { MujerComponent } from './sitio/mujer/mujer.component';
import { NinoComponent } from './sitio/nino/nino.component';
import { UltimoComponent } from './sitio/ultimo/ultimo.component';
import { ContenidoComponent } from './sitio/contenido/contenido.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MenuComponent, BodyComponent, FooterComponent, HombreComponent, MujerComponent, NinoComponent, UltimoComponent, ContenidoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tienda';
}
