
const data = {
    labels: ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM'],
    datasets: [
        {
            label: 'Temperature',
            backgroundColor: 'rgb(220, 20, 60, 0.5)',
            borderColor: 'rgb(220, 20, 60)',
            borderWidth: 1,
            data: [19, 20, 22, 18, 17, 23],
        },
        {
            label: 'Humidity',
            backgroundColor: 'rgba(54, 162, 235, 0.3)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            data: [50, 40, 54, 45, 55, 46],
        }
    ]
};

const options = {
    scales: {
        yAxes: [{
            gridLines: {
                color: 'gray',
                lineWidth: 0.1
            },
            ticks: {
                fontColor: 'white'
            }
        }],
        xAxes: [{
            gridLines: {
                color: 'gray',
                lineWidth: 0.1
            },
            ticks: {
                fontColor: 'white'
            }
        }]
    },
    legend: {
        align: 'end',
        labels: {
            fontColor: '#b2ff45'
        },
        display: true,
        labels: {
            usePointStyle: true,
            boxWidth: 10,
            fontColor: '#b2ff45',
            fontSize: 18,
            fontWeight: 'bold',
        }
    },
    layout: {
        padding: {
            top: 0,
            right: 15,
            bottom: 0,
            left: 10
        },
    },
    elements: {
        line: {
            borderWidth: 1,
            borderColor: 'white'
        }
    }
};

const ctx = document.getElementById('myChart').getContext('2d');

new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});