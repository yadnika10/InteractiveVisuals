
const ctx = document.getElementById('myChart').getContext('2d');

const AttacksData = {
    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Aug'],
    datasets: [
            {
                label: 'Cyber Attacks Data in %',
                backgroundColor: "lightgreen",
                borderColor: "green",
                borderWidth: 2,
                data: [100,80,70,15,65,26,85,75,60,90],
            },
        ],
};

const chartData = {
        type: 'bar',
        data: AttacksData,
        options:{
            responsive: true,
            plugins:{
                title:{
                    display: true,
                    text: 'Cyber Security Attacks'
                }
            },
            scales:{
                x:{
                    grid:{
                    display: true,
                    }
                },
                y:{
                    beginAtZero: true,
                }
            }
        },
};

const AttacksChart = new Chart(ctx,chartData)

AttacksChart.options.plugins.tooltip = {
    callbacks: {
        label: function (context) {
            return `Cyber Security Attacks in %: ${context.parsed.y}`;
        },
    },
};

function Animation(){
    anime({
        targets: AttacksChart.data.datasets[0].data,
        translateY: '300px',
        delay: 300,
        duration: 1000,   
        easing: 'easeInOutSine', 
        loop: true,
        direction: 'alternate',
        update: function (anim) {
            console.log('Animation has started.');
            AttacksChart.update()
        },
    });
}
Animation()