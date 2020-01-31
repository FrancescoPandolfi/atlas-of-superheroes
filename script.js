$(document).ready(function () {




// fetch('https://superheroapi.com/api/10220792517593374/1')
//   .then((resp) => resp.json())
//   .then(function (data) {
//   console.log(data.response);
//   })
//   .catch(function (error) {
// });



  $.ajax(
      {
        url: 'https://superheroapi.com/api/10220792517593374/1',
        contentType: "application/json",
        dataType: 'json',
        method: "GET",
        mode: 'no-cors',
        success: function (data, stato) {
          console.log(data);
        },
        error: function (richiesta, stato, errore) {
          alert(errore);
        }
      }
    );






}); // end ready
