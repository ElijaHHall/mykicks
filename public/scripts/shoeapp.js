
$(document).ready(function() {
    console.log('string')

    $.ajax({
        method: 'GET',
        url: '/api/shoes',
        success: function(response) {
            for(let i=0; i<response.shoes.length; i++) {
                $('#shoelist').append('<h4 id=' + response.shoes[i]._id + '>' + response.shoes[i].brand + '</h4> <button id="' + response.shoes[i]._id + '" name="submit" class="delete btn btn-danger"> Delete </button>');
                console.log(response.shoes) 
            }
        }
    })
})