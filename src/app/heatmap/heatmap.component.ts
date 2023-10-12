import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import highchartsHeatmap from 'highcharts/modules/heatmap';
import accessibility  from 'highcharts/modules/accessibility';
highchartsHeatmap(Highcharts);
accessibility(Highcharts);

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.css']
})
export class HeatmapComponent {

  HighCharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
        type: 'heatmap',
        marginTop: 40,
        marginBottom: 80,
        plotBorderWidth: 1
    },


    title: {
        text: 'Total Value',
        style: {
            fontSize: '1em'
        }
    },

    xAxis: {
        categories: ['Grp1', 'Grp', 'Grp2']
    },

    yAxis: {
        categories: ['Cat1', 'Cat2', 'Cat3'],
        reversed: true
    },

    accessibility: {
        point: {
            descriptionFormat: '{(add index 1)}. ' +
                '{series.xAxis.categories.(x)} and  ' +
                '{series.yAxis.categories.(y)}, total value is {value}.'
        }
    },

    colorAxis: {
        min: 0,
        minColor: '#51abb5',
        maxColor: '#bd6dcf'
    },

    legend: {
        align: 'right',
        layout: 'vertical',
        margin: 0,
        verticalAlign: 'top',
        y: 25,
        symbolHeight: 280
    },

    tooltip: {
        format: '<b>{series.xAxis.categories.(point.x)}</b> and ' +
                '<b>{series.yAxis.categories.(point.y)}</b><br>' +
                '<b>Total Value is {point.value}</b><br>'

    },

    series: [{
        type: 'heatmap',
        name: 'Products Info',
        borderWidth: 1,
        data: [[0, 0, 10], [0, 1, 19], [0, 2, 8],
            [1, 0, 92], [1, 1, 58], [1, 2, 78],
            [2, 0, 35], [2, 1, 15], [2, 2, 123],],
        dataLabels: {
            enabled: true,
            color: '#000000'
        }
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                yAxis: {
                    labels: {
                        format: '{substr value 0 1}'
                    }
                }
            }
        }]
    }
  }

  
}
