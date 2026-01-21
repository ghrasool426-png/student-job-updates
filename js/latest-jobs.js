
fetch('./latest-update/updates.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('JSON not found');
    }
    return response.json();
  })
  .then(data => {
    const list = document.getElementById('latest-jobs-list');
    list.innerHTML = '';

    if (!data || data.length === 0) {
      list.innerHTML = '<li>No latest job available</li>';
      return;
    }

    const job = data[0]; // ✅ sirf 1 latest job

    const li = document.createElement('li');
    li.innerHTML = `
      <a href="${job.url}">
        ${job.title}
      </a><br>
      <small>Last Date: ${job.lastDate}</small>
    `;

    list.appendChild(li);
  })
  .catch(error => {
    console.error('Latest Job Error:', error);
    const list = document.getElementById('latest-jobs-list');
    if (list) {
      list.innerHTML = '<li>Unable to load latest job</li>';
    }
  });
