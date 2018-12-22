import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CalculatorService } from '../services/calculator.service';
import { parse } from 'querystring';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {
  calcForm: FormGroup;
  submitted: boolean = false;
  noNumber: boolean = false;
  todayDate = new Date();

  cust={
    name:"Martial",
    age:25,
    address: {
      city: "Mumbai",
      state:"Maharashtra"

    }

  };

  months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

  constructor(private formBuilder1: FormBuilder, private router: Router,
     private calculatorService: CalculatorService) { }

  onSubmit() {
    this.submitted = true;

    if (this.calcForm.invalid) {
      return;
    }
    
    
  }

    ngOnInit() {
      this.calcForm=this.formBuilder1.group({
       number1:['',Validators.required],
        number2:['',Validators.required]
  
  
      });
  
    }

    addition(fn: string, sn:string)
    {
      let sum= this.calculatorService.addition (parseFloat(fn),parseFloat(sn));
      alert('Addition is '+sum);
    }

    multiplication(fn:string, sn:string)
    {
      let product= this.calculatorService.multiplication (parseFloat(fn),parseFloat(sn));
      alert('Multiplication is '+product);


    }


  }
