document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value.trim();
    const type = document.getElementById('type').value;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = 'Загрузка...';

    const apiKey = '8a5f68c4';
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(title)}&type=${type}`;
    console.log(url)

    fetch(url)
      .then(response => response.json())
      .then(data => {
        resultsDiv.innerHTML = '';
        if (data.Response === 'True') {
          data.Search.forEach(item => {
            const div = document.createElement('div');
            div.className = 'movie';
            div.innerHTML = `<strong>${item.Title}</strong> (${item.Year}) - ${item.Type}`;
            resultsDiv.appendChild(div);
          });
        }
         else {
          resultsDiv.innerHTML = 'Фильм не найден';
        }
      })
      .catch(error => {
        resultsDiv.innerHTML = 'Ошибка';
        console.error('Error:', error);
      });
  });