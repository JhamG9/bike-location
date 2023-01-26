import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { LocationFirestoreService } from 'src/app/firebase/location-firestore.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'];

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  // ----------------------------- LINE ------------------------------------
  hoursActivity = [6, 7, 8, 18, 19, 20];
  public lineChartData: ChartConfiguration<'line'>['data'];

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
  };
  public lineChartLegend = true;
  constructor(private locationFirestoreService: LocationFirestoreService) {}

  ngOnInit(): void {
    this.Last7Days();
  }

  Last7Days() {
    const dates = [...Array(7)].map((_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - i);
      return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
    });

    this.getLastLocations(dates);
  }

  getLastLocations(labels: any) {
    this.locationFirestoreService.getAllLocations().subscribe((resp: any[]) => {
      let arrayValuesDays: any = [];

      labels?.forEach((date: any) => {
        let dateArray = date.split('/');
        const elements = resp.filter(
          (location) =>
            location.date ===
            dateArray[2] + '-' + dateArray[1] + '-' + dateArray[0]
        );
        arrayValuesDays.push(elements.length);
      });

      this.barChartData = {
        labels: labels,
        datasets: [{ data: arrayValuesDays, label: 'Localizaciones por día' }],
      };

      let arrayValuesHours: any = [];
      this.hoursActivity.forEach((hour) => {
        const elements = resp.filter(
          (item) => +item.hour.split(':')[0] === hour
        );
        arrayValuesHours.push(elements.length);
      });
      this.lineChartData = {
        labels: ['6 am', '7am', '8am', '6pm', '7pm', '8pm'],
        datasets: [
          {
            data: arrayValuesHours,
            label: 'Horas con mayor actividad',
            fill: true,
            tension: 0.5,
            borderColor: 'black',
            backgroundColor: 'rgba(255,0,0,0.3)',
          },
        ],
      };
    });
  }

}
