import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RegisterLoginService } from '../../services/register-login.service';
import { TableModule } from 'primeng/table';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [TableModule, DatePipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor() {

  }

  userList: any;
  registerLoginSrv = inject(RegisterLoginService);

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    debugger;
    this.registerLoginSrv.getAllusers().subscribe((res: any) => {
      debugger;
      this.userList = res.data;
    })
  }
}
