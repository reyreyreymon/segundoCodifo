import { Component, OnInit } from '@angular/core';
import { CrudService } from "../../../service/crud/crud.service";

@Component({
  selector: 'app-empleados-v',
  templateUrl: './empleados-v.component.html',
  styleUrls: ['./empleados-v.component.css']
})
export class EmpleadosVComponent implements OnInit {


  empleados: any;
  empleado_nombe: string;
  empleado_apellido: string;
  empleado_ano: number;
  empleado_puesto: string;
  empleado_salario: number;

  constructor(public crudService:CrudService) { }

  ngOnInit(): void {
    //Para mostrar los empleados, obtenemos el arreglo
    this.crudService.obtener_Empleados()
    .subscribe(data => {
      this.empleados = data.map(e => {
        return {
          id: e.payload.doc.id,
          nombre: e.payload.doc.data()['nombre'],
          apellido: e.payload.doc.data()['apellido'],
          ano: e.payload.doc.data()['ano'],
          puesto: e.payload.doc.data()['puesto'],
          salario: e.payload.doc.data()['salario']
        };
      })
      console.log(this.empleados);
    });
  }

}
