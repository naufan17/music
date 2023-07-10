async function fetchData() {
    try {
        const response = await fetch('http://localhost:3000/songs', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
        });

        if (!response.ok) {
            throw new Error('Request failed');
        }

        const data = await response.json();
        const dataContainer = document.getElementById('songList');
        dataContainer.innerHTML = '';
    
        data.forEach(item => {
          const listItem = document.createElement('p');
          listItem.textContent = item.title;
          dataContainer.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error:', error.message);
    }
}
  
// Call the fetchData function to populate the data
fetchData();