document.getElementById('download-btn').addEventListener('click', function () {
  const link = document.createElement('a');
  link.href = 'assets/lake.jpg';
  link.download = 'lake.jpg';
  link.click();
});