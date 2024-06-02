const ctx2 = document.getElementById('barChart');

const barChart = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['Ferrari 250 GTO', 'Jaguar E-TYPE', 'Chevrolet Corvette Stingray C2', 'Chevrolet Bel Air (TRI-FIVE)', 'Lamborghini Miura', 'BMW 507', 'Jaguar XK120', 'Ford Mustang 69', 'Aston Martin DB5', 'Ford Mustang (First Generation)'],
    datasets: [{
      label: 'Ranking de Carros Mais Populares',
      data: [12, 19, 3, 5, 2, 3, 5, 10, 17, 8],
      backgroundColor: [
        'rgba(205, 21, 21, 1)',
        'rgba(71, 97, 110, 1)',
        'rgba(0, 0, 0, 1)',
        'rgba(1, 74, 150, 1)',
        'rgba(29, 59, 12, 1)',
        'rgba(82, 91, 146, 1)',
        'rgba(140, 40, 40, 1)',
        'rgba(216, 58, 24, 1)',
        'rgba(97, 62, 39, 1)',
        'rgba(32, 52, 86, 1)'
      ],
      borderColor: [
        'rgba(205, 21, 21, 1)',
        'rgba(71, 97, 110, 1)',
        'rgba(0, 0, 0, 1)',
        'rgba(1, 74, 150, 1)',
        'rgba(29, 59, 12, 1)',
        'rgba(82, 91, 146, 1)',
        'rgba(140, 40, 40, 1)',
        'rgba(216, 58, 24, 1)',
        'rgba(97, 62, 39, 1)',
        'rgba(32, 52, 86, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    indexAxis: 'y', // Torna o gráfico horizontal
    plugins: {
      legend: {
        position: 'bottom', // Posiciona a legenda no fundo
        labels: {
          font: {
            family: 'Inria Sans', // Define a fonte da legenda
            size: 11, // Tamanho da fonte da legenda
            weight: '700' // Peso da fonte
          },
          color: '#207183', // Cor da fonte (escura)
          padding: 20 // Aumenta o espaçamento entre as legendas
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true
      }
    }
  }
});
