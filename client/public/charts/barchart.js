


// bar chart js code start
const ctx = document.getElementById('liveTickChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                // label: '# of Votes',
                data: [8, 10, 12, 13, 18, 13, 10, 12, 9, 9, 11, 7],
                borderRadius: 30,
            },
            {
                // label: '# of Votes',
                data: [10, 12, 14, 15, 20, 15, 12, 14, 11, 10, 13, 9],
                backgroundColor: ["black"],
                borderRadius: 30,
            }

        ]
    },
    options: {
        scales: {
            x: {
                grid: {
                    drawOnChartArea: false
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    drawOnChartArea: false
                }
            }

        }
    }
});
// bar chart js code end

// doughnut chart 1 start
const doughnt1 = document.getElementById('doughnutsChart1');

new Chart(doughnt1, {
    type: 'doughnut',
    data: {
        datasets: [
            {
                data: [5, 10], // Adjusted to match your needs (not 85% fill)
                backgroundColor: ["#E2E2E2", "black"],
                cutout: '78%',
            }
        ]
    },
    options: {
        elements: {
            center: {
                text: '85%',
                color: '#000000', // Text color
            }
        },
        responsive: true,
        maintainAspectRatio: true,
    },
    plugins: [{
        id: 'textCenter',
        beforeDraw: function (chart) {
            const width = chart.width,
                height = chart.height,
                ctx = chart.ctx;

            ctx.restore();
            const fontSize = (height / 100).toFixed(2); // Font size calculation
            ctx.font = `bold ${fontSize}em sans-serif`; // Bold font
            ctx.textBaseline = "middle";

            const text = "85%",
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = (height / 2) + (fontSize * 5); // Adjusted to move text slightly upwards

            ctx.fillText(text, textX, textY);
            ctx.save();
        }
    }]
});


// doughnut chart 1 end



// doughnut chart 2 start
const doughnt2 = document.getElementById('doughnutsChart2');

new Chart(doughnt2, {
    type: 'doughnut',
    data: {
        datasets: [
            {
                data: [10, 12], // Adjusted to match your needs (not 85% fill)
                backgroundColor: ["#E2E2E2", "black"],
                cutout: '78%',
            }
        ]
    },
    options: {
        elements: {
            center: {
                text: '65%',
                color: '#000000', // Text color
            }
        },
        responsive: true,
        maintainAspectRatio: true,
    },
    plugins: [{
        id: 'textCenter',
        beforeDraw: function (chart) {
            const width = chart.width,
                height = chart.height,
                ctx = chart.ctx;

            ctx.restore();
            const fontSize = (height / 100).toFixed(2); // Font size calculation
            ctx.font = `bold ${fontSize}em sans-serif`; // Bold font
            ctx.textBaseline = "middle";

            const text = "65%",
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = (height / 2) + (fontSize * 5); // Adjusted to move text slightly upwards

            ctx.fillText(text, textX, textY);
            ctx.save();
        }
    }]
});// doughnut chart 2 end

// doughnut chart 3 start
const doughnt3 = document.getElementById('doughnutsChart3');

new Chart(doughnt3, {
    type: 'doughnut',
    data: {
        datasets: [
            {
                data: [10, 12], // Adjusted to match your needs (not 85% fill)
                backgroundColor: ["#E2E2E2", "black"],
                cutout: '78%',
            }
        ]
    },
    options: {
        elements: {
            center: {
                text: '90%',
                color: '#000000', // Text color
            }
        },
        responsive: true,
        maintainAspectRatio: true,
    },
    plugins: [{
        id: 'textCenter',
        beforeDraw: function (chart) {
            const width = chart.width,
                height = chart.height,
                ctx = chart.ctx;

            ctx.restore();
            const fontSize = (height / 100).toFixed(2); // Font size calculation
            ctx.font = `bold ${fontSize}em sans-serif`; // Bold font
            ctx.textBaseline = "middle";

            const text = "90%",
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = (height / 2) + (fontSize * 5); // Adjusted to move text slightly upwards

            ctx.fillText(text, textX, textY);
            ctx.save();
        }
    }]
});// doughnut chart 3 end


// doughnut chart 4 start
const doughnt4 = document.getElementById('doughnutsChart4');

new Chart(doughnt4, {
    type: 'doughnut',
    data: {
        datasets: [
            {
                data: [10, 12], // Adjusted to match your needs (not 85% fill)
                backgroundColor: ["#E2E2E2", "black"],
                cutout: '78%',
            }
        ]
    },
    options: {
        elements: {
            center: {
                text: '30%',
                color: '#000000', // Text color
            }
        },
        responsive: true,
        maintainAspectRatio: true,
    },
    plugins: [{
        id: 'textCenter',
        beforeDraw: function (chart) {
            const width = chart.width,
                height = chart.height,
                ctx = chart.ctx;

            ctx.restore();
            const fontSize = (height / 100).toFixed(2); // Font size calculation
            ctx.font = `bold ${fontSize}em sans-serif`; // Bold font
            ctx.textBaseline = "middle";

            const text = "30%",
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = (height / 2) + (fontSize * 5); // Adjusted to move text slightly upwards

            ctx.fillText(text, textX, textY);
            ctx.save();
        }
    }]
});// doughnut chart 4 end