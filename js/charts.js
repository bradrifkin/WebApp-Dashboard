var ctx = document.getElementById('trafficChart').getContext('2d');
var ctxbar = document.getElementById('dailyTrafficChart').getContext('2d');
var ctxpie = document.getElementById('mobileUsers').getContext('2d');

Chart.defaults.global.defaultFontColor = '#A7A7A7';
// Chart.defaults.global.layout.padding = 20;

var w = window.innerWidth;
if (w >= 768) {
    Chart.defaults.global.layout.padding = 20;
}

// HOURLY TRAFFIC (LINE CHART)
var chartHourly = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ["8am", "10am", "12pm", "2pm", "4pm", "6pm", "8pm", "10pm", "12am", "2am", "4am", "6am"],
        datasets: [{
            backgroundColor: 'rgba(226, 227, 246, 0.5)',
            borderColor: '#AFB2E7',
            data: [60, 72, 58, 78, 60, 75, 65, 49, 42, 35, 25, 40, 50],
            pointRadius: 7,
            pointBackgroundColor: '#FBFBFB',
        }]
    },

    options: {
        legend: {
            display: false,
        },
        elements: {
            line: {
                tension: 0,
            }
        },
    }
});

// DAILY TRAFFIC (BAR CHART)
var barChart = new Chart(ctxbar, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: '# of Votes',
            data: [60, 100, 75, 125, 175, 125, 150, 100],
            backgroundColor: '#7377BF',
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        legend: {
            display: false,
        },
        scales: {
            xAxes:[{
                barThickness: 30,
            }]
        },
    }
});

// MOBILE USERS (PIE CHART)

var pieChart = new Chart(ctxpie, {
    type: 'doughnut',
    data: {
        labels: ['Phones', 'Tablets', 'Desktop'],
        datasets: [{
            data: [15, 15, 70],
            backgroundColor: ['#74B1BF', '#81C98F', '#7377BF']
        }]
    },
    options: {
        legend: {
            position: 'right',
        }
    }
});

const chartFilters = document.querySelector('.chartFilters');
const lineCharts = document.querySelectorAll('.chartFilters li');

chartFilters.addEventListener("click", (e) => {
    if (e.target.tagName === 'LI') {
        for (let i = 0; i < lineCharts.length; i++) {
            lineCharts[i].className = '';
        }        
        let li = e.target;
        li.className = 'selectedChart';
        if (li.textContent === 'Daily') {
            // DAILY LINE CHART
            var chartDaily = new Chart(ctx, {
                type: 'line',

                data: {
                    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    datasets: [{
                        backgroundColor: 'rgba(226, 227, 246, 0.5)',
                        borderColor: '#AFB2E7',
                        data: [50, 100, 75, 125, 175, 125, 150, 100],
                        pointRadius: 7,
                        pointBackgroundColor: '#FBFBFB',
                    }]
                },

                options: {
                    legend: {
                        display: false,
                    },
                    elements: {
                        line: {
                            tension: 0,
                        }
                    }
                }
            });
        } else if (li.textContent === 'Weekly') {
            // WEEKLY LINE CHART
            var chartWeekly = new Chart(ctx, {
                type: 'line',

                data: {
                    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
                    datasets: [{
                        backgroundColor: 'rgba(226, 227, 246, 0.5)',
                        borderColor: '#AFB2E7',
                        data: [500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2000],
                        pointRadius: 7,
                        pointBackgroundColor: '#FBFBFB',
                    }]
                },

                options: {
                    legend: {
                        display: false,
                    },
                    elements: {
                        line: {
                            tension: 0,
                        }
                    }
                }
            }); 
        } else if (li.textContent === 'Monthly') {
            // MONTHLY LINE CHART
            var chartMonthly = new Chart(ctx, {
                type: 'line',

                data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [{
                        backgroundColor: 'rgba(226, 227, 246, 0.5)',
                        borderColor: '#AFB2E7',
                        data: [500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2000],
                        pointRadius: 7,
                        pointBackgroundColor: '#FBFBFB',
                    }]
                },

                options: {
                    legend: {
                        display: false,
                    },
                    elements: {
                        line: {
                            tension: 0,
                        }
                    }
                }
            });
        } else if (li.textContent === 'Hourly') {
            var chartHourly = new Chart(ctx, {
                type: 'line',

                data: {
                    labels: ["8am", "10am", "12pm", "2pm", "4pm", "6pm", "8pm", "10pm", "12am", "2am", "4am", "6am"],
                    datasets: [{
                        backgroundColor: 'rgba(226, 227, 246, 0.5)',
                        borderColor: '#AFB2E7',
                        data: [60, 72, 58, 78, 60, 75, 65, 49, 42, 35, 25, 40, 50],
                        pointRadius: 7,
                        pointBackgroundColor: '#FBFBFB',
                    }]
                },

                options: {
                    legend: {
                        display: false,
                    },
                    elements: {
                        line: {
                            tension: 0,
                        }
                    }
                }
            });
        }
    }
});