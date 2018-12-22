import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

    addition(a:number, b:number)
    {
      return a+b;
    }

    multiplication(a:number, b:number)
    {
      return a*b;
    }

}
