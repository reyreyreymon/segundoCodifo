import { Component, OnInit } from '@angular/core';
import { CrudService } from "../../../service/crud/crud.service";

@Component({
  selector: 'app-productos-v',
  templateUrl: './productos-v.component.html',
  styleUrls: ['./productos-v.component.css']
})
export class ProductosVComponent implements OnInit {

  productos: any;
  producto_descripcion: string;
  producto_marca: string;
  producto_precio: number;

  constructor(public crudService:CrudService) { }

  ngOnInit(): void {
    //Para mostrar los prodcutos, obtenemos el arreglo
    this.crudService.obtener_Productos()
    .subscribe(data => {
      this.productos = data.map(e => {
        return {
          id: e.payload.doc.id,
          editable:false,
          descripcion: e.payload.doc.data()['descripcion'],
          marca: e.payload.doc.data()['marca'],
          precio: e.payload.doc.data()['precio']
        };
      })
      console.log(this.productos);
    });
  }

}
