import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Chart, registerables } from 'chart.js';

@Component({
    selector: 'app-reports',
    templateUrl: './reports.component.html',
    styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
    reports: any[] = [];
    apiUrl = 'https://your-s3-bucket-url/reports.json'; // Replace with your API URL

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.fetchReports();
        // this.initializeCharts();
    }

    fetchReports(): void {
        this.http.get<any[]>(this.apiUrl).subscribe(
            data => {
                this.reports = data;
                this.updateReportsTable();
            },
            error => {
                console.error('Error fetching reports:', error);
            }
        );
    }

    updateReportsTable(): void {
        // Logic to update the reports table if needed
    }

    // initializeCharts(): void {
    //     Chart.register(...registerables);

    //     const attendanceCtx = document.getElementById('attendance-chart') as HTMLCanvasElement;
    //     new Chart(attendanceCtx.getContext('2d'), {
    //         type: 'bar',
    //         data: {
    //             labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //             datasets: [{
    //                 label: 'Employee Attendance',
    //                 data: [65, 59, 80, 81, 56, 55, 40],
    //                 backgroundColor: 'rgba(75, 192, 192, 0.2)',
    //                 borderColor: 'rgba(75, 192, 192, 1)',
    //                 borderWidth: 1
    //             }]
    //         },
    //         options: {
    //             scales: {
    //                 y: {
    //                     beginAtZero: true
    //                 }
    //             }
    //         }
    //     });

    //     // Initialize other charts if needed
    // }
}
