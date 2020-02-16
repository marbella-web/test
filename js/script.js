$(document).ready(function(){

        var displayResources = $('.content');    
    
        $.ajax({
          type: "GET",
          url: "js/data.json",
          success: function(result) {
       
            var output = "";
            for (var i in result) {
              output += '<section class="component book-component__book-item">' +
               '<a href="'+result[i].url+'" class="book__link">' +
                  '<div class="book__wrapper">' +
                   '<div class="book__image"><img src='+result[i].image+' /></div>' +
                    '<div class="book__content">' +
                       '<h5 class="book__title">'+result[i].title+'</h5>' +
                        '<span class="book__author">'+result[i].author+'</span>' +
                     '</div>' +
                  '</div>' +
                '</a>' +
               '</section>';
            }
    
            displayResources.html(output);
           
          }
          
        } );
     
}); /* close document ready jquery */
