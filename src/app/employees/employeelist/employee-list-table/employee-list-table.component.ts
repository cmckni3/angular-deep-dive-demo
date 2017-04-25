import { Component, OnInit, Input } from '@angular/core';

import { Employee } from '../../models';

@Component({
  selector: 'employee-list-table',
  templateUrl: './employee-list-table.component.html',
  styleUrls: ['./employee-list-table.component.scss']
})
export class EmployeeListTableComponent implements OnInit {
  @Input() employees: Employee[] = [];

  constructor() { }

  ngOnInit() {}
}
