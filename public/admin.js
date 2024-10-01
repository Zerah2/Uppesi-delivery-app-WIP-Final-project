const chartData = {
    week: {
        netRevenue: [1200, 1300, 900, 1400, 1500, 1100, 1600],
        numberOfSales: [15, 10, 13, 16, 19, 11, 18]
    },
    month: {
        netRevenue: [12000, 13000, 11000, 15000, 16000, 14000, 17000],
        numberOfSales: [150, 140, 130, 160, 180, 170, 190]
    },
    year: {
        netRevenue: [140000, 150000, 130000, 160000, 170000, 150000, 180000],
        numberOfSales: [1500, 1400, 1300, 1600, 1800, 1700, 1900]
    }
};

const ctx = document.getElementById('salesChart').getContext('2d');
let salesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'], // Default labels for "week"
        datasets: [
            {
                label: 'Net Revenue',
                data: chartData.week.netRevenue, // Default to weekly data
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                yAxisID: 'y'
            },
            {
                label: 'Number of Sales',
                data: chartData.week.numberOfSales,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                yAxisID: 'y1'
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                type: 'linear',
                position: 'left'
            },
            y1: {
                beginAtZero: true,
                type: 'linear',
                position: 'right'
            }
        }
    }
});

function filterData(timeframe) {
    let labels, netRevenue, numberOfSales;

    switch (timeframe) {
        case 'week':
            labels = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];
            netRevenue = chartData.week.netRevenue;
            numberOfSales = chartData.week.numberOfSales;
            break;
        case 'month':
            labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
            netRevenue = chartData.month.netRevenue;
            numberOfSales = chartData.month.numberOfSales;
            break;
        case 'year':
            labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
            netRevenue = chartData.year.netRevenue;
            numberOfSales = chartData.year.numberOfSales;
            break;
    }

    salesChart.data.labels = labels;
    salesChart.data.datasets[0].data = netRevenue;
    salesChart.data.datasets[1].data = numberOfSales;
    salesChart.update();
}
