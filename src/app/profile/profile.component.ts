import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  attendanceDetails = [
    { date: '2024-08-01', status: 'Present' },
    { date: '2024-08-02', status: 'Absent' }
    // Add more rows as needed
  ];
}
