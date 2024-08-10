const chart = document.querySelector('#chart').getContext('2d');

new Chart(chart, {
  type: 'line',
  data: {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    datasets: [
      {
        label: 'BTC',
        data: [29374, 33537, 49631, 49631, 59095, 57828, 36684, 33572, 39974, 48847, 48116, 61004],
        borderColor: 'red',
        borderWidth: 2
      },
      {
        label: 'ETH',
        data: [31500, 40000, 41000, 88000, 26000, 46000, 32698, 5000, 3000, 18656, 24832, 36844],
        borderColor: 'gray',
        borderWidth: 2
      },
      {
        label: 'EUR',
        data: [15023, 16012, 18123, 20045, 21012, 19120, 17090, 18034, 19897, 23422, 22450, 32940],
        borderColor: 'blue',
        borderWidth: 2
      },
    ]
  },
  options: {
    responsive: true,
  }
});
const menuBtn =document.querySelector('#menu-btn');
const closeBtn =document.querySelector('#close-btn');
const sidebar =document.querySelector('aside');

menuBtn.addEventListener('click',()=>{
  sidebar.style.display='block';
})
closeBtn.addEventListener('click',()=>{
  sidebar.style.display='none';
})

const themeBtn =document.querySelector('.theme-btn');
themeBtn.addEventListener('click',()=>{
  document.body.classList.toggle('dark-theme');

  themeBtn.querySelector('span:nth-child(1)').classList.toggle('active');
  themeBtn.querySelector('span:nth-child(2)').classList.toggle('active');
})