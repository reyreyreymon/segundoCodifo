import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './paginas_inicio/inicio/inicio.component';
import { AcercaComponent } from './paginas_inicio/acerca/acerca.component';
import { ContactoComponent } from './paginas_inicio/contacto/contacto.component';
import { PreguntasfComponent } from './paginas_inicio/preguntasf/preguntasf.component';

//Administrador
import {EmpleadosComponent} from "./paginas_inicio/admin/empleados/empleados.component";
import { ProductosComponent } from "./paginas_inicio/admin/productos/productos.component";
import { AnalisisComponent } from "./paginas_inicio/admin/analisis/analisis.component";

//vendedor
import {AnalisisVComponent} from "./paginas_inicio/vendedor/analisis-v/analisis-v.component";
import {EmpleadosVComponent} from "./paginas_inicio/vendedor/empleados-v/empleados-v.component";
import {ProductosVComponent} from "./paginas_inicio/vendedor/productos-v/productos-v.component";





const routes: Routes = [
  //paginas basicas
  {path: "inicio", component:InicioComponent},
  {path: "acercade", component:AcercaComponent},
  {path: "contacto", component:ContactoComponent},
  {path: "preguntasf", component:PreguntasfComponent},

  //paginas admin
  {path: "empleados_a", component:EmpleadosComponent},
  {path: "productos_a", component:ProductosComponent},
  {path: "analisis_a", component:AnalisisComponent},

  //paginas venderdor
  {path: "empleados_v", component:EmpleadosVComponent},
  {path: "productos_v", component:ProductosVComponent},
  {path: "analisis_v", component:AnalisisVComponent},

  {path: "", pathMatch: "full", redirectTo: "inicio"},
  {path: "**", pathMatch: "full", redirectTo: "inicio"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
