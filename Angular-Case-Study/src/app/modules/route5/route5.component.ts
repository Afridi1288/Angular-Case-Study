import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-route5',
  templateUrl: './route5.component.html',
  styleUrls: ['./route5.component.scss']
})
export class Route5Component implements OnInit {
  students: any[] = [
    {name: 'Student 1', class: 3, section: 'A', sub1: 90, sub2: 85, sub3: 90},
    {name: 'Student 2', class: 3, section: 'E', sub1: 60, sub2: 80, sub3: 80},
    {name: 'Student 3', class: 3, section: 'C', sub1: 76, sub2: 47, sub3: 70},
    {name: 'Student 4', class: 3, section: 'F', sub1: 98, sub2: 78, sub3: 60},
    {name: 'Student 5', class: 3, section: 'H', sub1: 89, sub2: 68, sub3: 80},
    {name: 'Student 6', class: 3, section: 'B', sub1: 57, sub2: 85, sub3: 75},
    {name: 'Student 7', class: 3, section: 'G', sub1: 86, sub2: 90, sub3: 90},
    {name: 'Student 8', class: 3, section: 'D', sub1: 57, sub2: 70, sub3: 95},
  ]
  sortedData: any[];

  employeDetails: any[] = []
  sortedEmployeDetails: any[] = [];

  constructor(
    private dataService: DataService
  ) {
    this.sortedData = this.students.slice();
  }

  ngOnInit(): void {
    this.dataService.getEmployeDetails().subscribe(
      (data) => {
        if(data) {
          console.log(data);
          this.employeDetails = data
          this.sortedEmployeDetails = this.employeDetails.slice()
        }
      }
    )
  }

  getHeaders() {
    let headers: string[] = [];
    if(this.students) {
      this.students.forEach((value) => {
        Object.keys(value).forEach((key) => {
          if(!headers.includes(key)){
            headers.push(key)
          }
        })
      })
    }
    return headers;
  }

  getHeadersForEmployeeTable() {
    let headers: string[] = [];
    if(this.employeDetails) {
      this.employeDetails.forEach((value) => {
        Object.keys(value).forEach((key) => {
          if(!headers.includes(key)){
            headers.push(key)
          }
        })
      })
    }
    return headers;
  }

  sortData(sort: any, type?: 'student' | 'employee') {
    if(type == 'student') {
      const data = this.students.slice();
      if (!sort.active || sort.direction === '') {
        this.sortedData = data;
        return;
      }
  
      this.sortedData = data.sort((a, b) => {
        const isAsc = sort.direction === 'asc';
        switch (sort.active) {
          case 'name':
            return this.compare(a.name, b.name, isAsc);
          case 'class':
            return this.compare(a.class, b.class, isAsc);
          case 'section':
            return this.compare(a.section, b.section, isAsc);
          case 'sub1':
            return this.compare(a.sub1, b.sub1, isAsc);
          case 'sub2':
            return this.compare(a.sub2, b.sub2, isAsc);
          case 'sub3':
            return this.compare(a.sub3, b.sub3, isAsc);
          default:
            return 0;
        }
      });
    } else {
      const data = this.employeDetails.slice();
      if (!sort.active || sort.direction === '') {
        this.sortedEmployeDetails = data;
        return;
      }
  
      this.sortedEmployeDetails = data.sort((a, b) => {
        const isAsc = sort.direction === 'asc';
        switch (sort.active) {
          case 'employee_age':
            return this.compare(a.employee_age, b.employee_age, isAsc);
          case 'employee_name':
            return this.compare(a.employee_name, b.employee_name, isAsc);
          case 'employee_salary':
            return this.compare(a.employee_salary, b.employee_salary, isAsc);
          case 'id':
            return this.compare(a.id, b.id, isAsc);
          case 'profile_image':
            return this.compare(a.profile_image, b.profile_image, isAsc);
          default:
            return 0;
        }
      });
    }

  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}



