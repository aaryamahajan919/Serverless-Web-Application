const apiUrl = "https://nicdwyy7te.execute-api.ap-south-1.amazonaws.com/prod"; // Replace with your actual endpoint

fetch(apiUrl)
  .then(res => res.json())
  .then(data => {
    document.getElementById("views").innerText = data.views;
  })
  .catch(error => {
    console.error("Failed to fetch views:", error);
    document.getElementById("views").innerText = "error";
  });
