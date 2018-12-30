const circle1 = document.getElementById('circle1');
const peiPercentage = document.getElementById('peiPercentage');

peiPercentage.addEventListener('input', () => {
  let percentageInput = peiPercentage.value;
  circle1.style.strokeDasharray = `${percentageInput} 100`;
});
