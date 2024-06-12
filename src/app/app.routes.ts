import { Routes } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MenuComponent } from './sitio/menu/menu.component';
import { BodyComponent } from './sitio/body/body.component';
import { FooterComponent } from './sitio/footer/footer.component';
import { HombreComponent } from './sitio/hombre/hombre.component';
import { MujerComponent } from './sitio/mujer/mujer.component';
import { NinoComponent } from './sitio/nino/nino.component';
import { UltimoComponent } from './sitio/ultimo/ultimo.component';
import { ContenidoComponent } from './sitio/contenido/contenido.component';

export const routes: Routes = [
    { path: '', redirectTo:'home', pathMatch: 'full' },
    { path: 'menu', component: MenuComponent },
    { path: 'body', component: BodyComponent },
    { path: 'footer', component: FooterComponent},
    { path: 'hombre', component: HombreComponent },
    { path: 'mujer', component: MujerComponent },
    { path: 'nino', component: NinoComponent },
    { path: 'ultimo', component: UltimoComponent },
    { path: 'contenido', component: ContenidoComponent }

];


