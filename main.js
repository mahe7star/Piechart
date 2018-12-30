const circle1 = document.getElementById('circle1');
const peiPercentage = document.getElementById('peiPercentage');

peiPercentage.addEventListener('input', () => {
  
  let percentageInput = peiPercentage.value;
  if(percentageInput >= 100) {
    percentageInput.readonly = true;
    alert('percentage cannot be greater then 100!')
  } else {
    percentageInput.readonly = false;
    circle1.style.strokeDasharray = `${percentageInput} 100`;
  }
});
