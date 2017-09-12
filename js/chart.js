const $line = $("#lineChart");
const $bar = $("#bar");
const $doughnut = $("#doughnut");

let chart1 = new Chart($line, {
    type: "line",
    data: {
    labels: [16,23,30,6,13,20,27,4,11,18,25],
    datasets: [{ 
        data: [750,1250,850,1500,2000,1500,1750,1250,1750,2350,1700,2250],
        borderColor: "#635889",
        fill: true
      }
    ]
  },
  options: {
      legend: {
          display: false
      }
  }
});

let chart2 = new Chart($bar, {
    type: "bar",
    data: {
      labels: ["S", "M", "T", "W", "T", "F", "S"],
      datasets: [
        {
          backgroundColor: "#635889",
          data: [75,100,175,125,225,200,100]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: false,
        text: 'Daily Traffic'
      }
    }
});

let chart3 = new Chart($doughnut, {
   type: "doughnut",
   data: {
      labels: ["Phones", "Tablets", "Desktop"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#635889","#3cba9f"],
          data: [2478,5267,734]
        }
      ]
    },
    options: {
      title: {
        display: false,
        text: 'Mobile Users'
      },
      legend: {
          position: "right"
      }
    }
});








