document.addEventListener("DOMContentLoaded", function () {

  fetch('./results/results.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('JSON not found');
      }
      return response.json();
    })
    .then(data => {
      const ul = document.getElementById('results-list');

      // Safety check
      if (!ul) return;

      // Clear "Loading results..."
      ul.innerHTML = '';

      data.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');

        a.href = item.url;
        a.textContent = item.title;

        li.appendChild(a);
        ul.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Results load error:', error);
    });

});
