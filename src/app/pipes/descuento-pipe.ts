import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descuento'
})
export class DescuentoPipe implements PipeTransform {

  transform(value: number, discountPercent: number): number {

    // Si el descuento es inválido devolvemos el precio original
    if (!discountPercent || isNaN(discountPercent) || discountPercent <= 0) {
      return value;
    }

    const descuento = value * (discountPercent / 100);

    return value - descuento;
  }

}