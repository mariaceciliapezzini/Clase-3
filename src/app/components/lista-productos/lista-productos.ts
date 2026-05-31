import { Component, inject, OnInit } from '@angular/core';

import { CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';

import { Productos, Producto } from '../../services/productos';
import { DescuentoPipe } from '../../pipes/descuento-pipe';

@Component({
  selector: 'app-lista-productos',
  imports: [
    CurrencyPipe,
    DatePipe,
    DecimalPipe,
    DescuentoPipe
  ],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.css'
})
export class ListaProductos implements OnInit {

  productosList: Producto[] = [];

  private productosService = inject(Productos);

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productosList = this.productosService.getProductos();
  }

  agregarProductoSimulado(): void {
    const nombres_ejemplo = [
      'Notebook Lenovo',
      'Mouse Logitech',
      'Teclado Redragon',
      'Monitor Samsung',
      'Auriculares JBL'
    ];

    const nombre_aleatorio =
      nombres_ejemplo[Math.floor(Math.random() * nombres_ejemplo.length)];

    const anio_aleatorio = Math.floor(Math.random() * (2026 - 2020) + 2020);
    const mes_aleatorio = Math.floor(Math.random() * 12);
    const dia_aleatorio = Math.floor(Math.random() * 28) + 1;
    const precio_aleatorio = Math.floor(Math.random() * (1500000 - 10000) + 10000);
    const descuento_aleatorio = Math.floor(Math.random() * 50) + 1;

    const producto_simulado: Omit<Producto, 'id'> = {
      nombre: nombre_aleatorio,
      precio: precio_aleatorio,
      fechaAlta: new Date(anio_aleatorio, mes_aleatorio, dia_aleatorio),
      descuento: descuento_aleatorio
    };

    this.productosService.addProducto(producto_simulado);
    this.cargarProductos();
  }

  eliminarProducto(id: number): void {
    const seElimino = this.productosService.deleteProducto(id);

    if (seElimino) {
      this.cargarProductos();
    }
  }

}