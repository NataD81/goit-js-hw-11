export function findImg(request) {
  const pixUrl = "https://pixabay.com/api/";
  const apiKey = "44048245-ca045a99f6e49609e4580f957";
  const params = new URLSearchParams({
    key: apiKey,
    q: request,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  const url = `${pixUrl}?${params}`;
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    return data;
    
  })

  .catch(error => {
    console.log("", error); 
});
}

