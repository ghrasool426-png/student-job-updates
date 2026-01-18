fetch('results/results.json')
  .then(response => response.json())
  .then(data => {
    const ul = document.getElementById('results-list');
    ul.innerHTML = '';

    data.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');

      a.href = item.url;
      a.textContent = item.title;

      li.appendChild(a);
      ul.appendChild(li);
    });
  });
