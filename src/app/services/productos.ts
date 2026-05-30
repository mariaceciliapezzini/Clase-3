import { Injectable } from '@angular/core';

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  fechaAlta: Date;
  descuento: number;
}


@Injectable({
  providedIn: 'root',
})

export class Productos {
private listaProductos: Producto[] = [
  {
    id: 1,
    nombre: 'Notebook Lenovo',
    precio: 1500000,
    fechaAlta: new Date(2026, 4, 15),
    descuento: 10
  },
  {
    id: 2,
    nombre: 'Mouse Logitech',
    precio: 25000,
    fechaAlta: new Date(2026, 4, 20),
    descuento: 5
  },
  {
    id: 3,
    nombre: 'Teclado Redragon',
    precio: 45000,
    fechaAlta: new Date(2026, 4, 25),
    descuento: 15
  }
]
getProductos(): Producto[] {

  return [...this.listaProductos];

}
addProducto(producto_raw: Omit<Producto, 'id'>) {

  const new_producto_id =
    this.listaProductos.length > 0
      ? Math.max(
          ...this.listaProductos.map(
            producto => producto.id
          )
        ) + 1
      : 1;

  const nuevoProducto: Producto = {
    id: new_producto_id,
    ...producto_raw
  };

  this.listaProductos.push(nuevoProducto);
  return nuevoProducto;

}
deleteProducto(id: number): boolean {

  const original_length = this.listaProductos.length;

  this.listaProductos = this.listaProductos.filter((producto) => {
    return producto.id !== id;
  });

  return this.listaProductos.length < original_length;
}

}