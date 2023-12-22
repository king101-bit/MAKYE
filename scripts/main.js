document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const productList = ['product1', 'product2', 'product3'];
    let results = [];
   
    for (let i = 0; i < productList.length; i++) {
      if (productList[i].includes(searchQuery)) {
        results.push(productList[i]);
      }
    }
   
    if (results.length > 0) {
      alert(`Found ${results.length} result(s): ${results.join(', ')}`);
    } else {
      alert('No results found');
    }
   });