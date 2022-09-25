
function toggleMenu() {
    
}

  const labels = [  
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Total $',
      backgroundColor: 'white',
      borderColor: 'black',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {}
  };


  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );



