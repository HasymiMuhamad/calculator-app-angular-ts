import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator-app';
  counter : number = 0;
  operator : string = '+';
  getOperand1 : number = 0;
  getOperand2 : number = 0;
  dataNumber : number[] = [];
  totalValue : number = 0;

  handleOperator(data:string){
    this.operator = data;
  }

  handleOperand(getNumber:number){
      this.dataNumber.push(getNumber)
  }

  handleProcess(){
    console.log('data nuumber', this.dataNumber)
    if (this.operator === '+'){
      //  this.dataNumber =  this.getOperand1 + this.getOperand2
      var sum = this.dataNumber.reduce(function(a, b){
        return a + b;
      }, 0);

      this.totalValue = sum;
    } else if (this.operator === '-'){
      //  this.dataNumber = this.getOperand2 - this.getOperand2

      var min = this.dataNumber.reduce(function(a, b){
        return a - b;
      }, 0);

      this.totalValue = min;
    } else if (this.operator === '/'){
      // this.dataNumber = this.getOperand1 / this.getOperand2
      var devid = this.dataNumber.reduce(function(a, b){
        return a / b;
      }, 0);

      this.totalValue = devid;
    } else if (this.operator === '*'){
      // this.dataNumber = this.getOperand1 * this.getOperand2
      var times = this.dataNumber.reduce(function(a, b){
        return a * b;
      }, 0);

      this.totalValue = times;
    }
  }

  onAdd(){
    this.counter = this.counter + 1
  }

  onReduce(){
    this.counter = this.counter - 1
  }
}
