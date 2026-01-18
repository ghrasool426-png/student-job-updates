document.addEventListener("DOMContentLoaded", function () {

  fetch('https://ghrasool426-png.github.io/student-job-updates/results/results.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var ul = document.getElementById('results-list');

      if (!ul) {
        console.log('results-list not found');
        return;
      }

      ul.innerHTML = '';

      data.forEach(function (item) {
        var li = document.createElement('li');
        var a = document.createElement('a');

        a.href = item.url;
        a.textContent = item.title;

        li.appendChild(a);
        ul.appendChild(li);
      });
    })
    .catch(function (error) {
      console.error('Final Results Error:', error);
    });

});
