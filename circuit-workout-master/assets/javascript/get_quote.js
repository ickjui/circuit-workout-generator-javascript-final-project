const url = 'https://quotable.io/random?tags=inspirational';

document.addEventListener('DOMContentLoaded', function() {

  const quote = document.querySelector('.quote');
  const author = document.querySelector('.author');

  fetch(url)
    .then( function(response) {
      // .json() method converts the response string (formatted in JSON) into a data structure
      return response.json();
    })
    .then( function(data) {
      // Data structure to work with
      quote.innerText = ('"' + data['content'] + '"' + ' - ' + data['author']);
      author.innertext = (data['author']);
    })
    .catch( function(e) {
      // Errors caught here
      console.log('An error occurred!', e);
    });

});