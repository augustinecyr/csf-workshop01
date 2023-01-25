import { Component } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  title = "Employee Page"

  number1 = 12;
  number2 = 22;

  visible = this.ShowContent(this.number1, this.number2);
  isVisible = true;

  color: any;

  ShowContent(val1: number, val2: number): boolean {
    // displays title if val2 is greater
    if (val1 < val2) {
      return true;
    }

    else {
      return false;
    }
  }
  // IF Else
  OnChange(arg: any) {
    this.isVisible = arg;
  }
  // switch case
  SetColor(event: any) {
    this.color = event.target.value;
  }
  // for loop
  Employee: any[] = [];
  constructor() {
    this.Employee = [
      {
        Name: 'Bruce',
        Age: '22',
        Gender: 'M'
      },
      {
        Name: 'Alicia',
        Age: '25',
        Gender: 'F'
      },
      {
        Name: 'Jayden',
        Age: '28',
        Gender: 'M'
      }
    ]
  }

  GetMoreEmployee(): void {
    this.Employee = [
      {
        Name: 'Bruce',
        Age: '22',
        Gender: 'M'
      },
      {
        Name: 'Alicia',
        Age: '25',
        Gender: 'F'
      },
      {
        Name: 'Jayden',
        Age: '28',
        Gender: 'M'
      },
      {
        Name: 'Janice',
        Age: '19',
        Gender: 'F'
      },
      {
        Name: 'Adam',
        Age: '30',
        Gender: 'M'
      },
      {
        Name: 'Joseph',
        Age: '14',
        Gender: 'M'
      }
    ]
  }

  TrackByEmployeeName(index: number, employee: any): String {
    return employee.Name;
  }

  CheckAge(Age: number) {
    let val = Age < 18 ? 'Under 18' : 'Above 18';

    switch (val) {
      case 'Under 18':
        return 'red'
      case 'Above 18':
        return 'green'
      default:
        return ""
    }
  }

  GetCSS(isEven: any) {
    if (isEven) {
      return "color1";

    } else {
      return "color2";
    }
  }

  ShowSomeData() {
    alert("Hello World!!!");
  }
}

