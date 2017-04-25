import { Injectable } from '@angular/core';

// import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';

import { Employee } from './models';

@Injectable()
export class EmployeeService {
  constructor() {}

  allEmployees(): Employee[] {
    return [
      { name: 'Richard Hendriks', title: 'CEO' },
      { name: 'Erlich Bachman', title: 'CCO' },
      { name: 'Jared Dunn', title: 'CFO' },
      { name: 'Dinesh Chugtai', title: 'Java Developer' },
      { name: 'Bertram Gilfoyle', title: 'Systems Architect' }
    ]
    .map((employeeData) => Object.assign(new Employee(), employeeData));
  }

  // private heroesUrl = 'api/employees';  // URL to web API
  // constructor (private http: Http) {}
  // allEmployees(): Observable<Employee[]> {
  //   return this.http.get(this.heroesUrl)
  //                   .map((res: Response) => <Employee[]>res.json())
  //                   .catch(() => {
  //                     // Handle errors here
  //                   });
}
