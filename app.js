document.getElementById("searchButton").addEventListener("click", () => {
  // Use the fetch() API for AJAX request
  fetch("superheroes.php")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // Assuming data is an array of superhero names
      alert("Superheroes:\n" + data.join("\n"));
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      alert("Failed to fetch superheroes. Please try again later.");
    });
});
