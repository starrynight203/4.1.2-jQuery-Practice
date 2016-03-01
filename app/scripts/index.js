//console.log("Hello World!");
// var so we can type $ instead of jquery everytime
var $ = require("jquery");
// adds a click event to the html element artist
  $('.artist').on('click', function(e){
//    $(this).children().toggleClass('hide');
//this refers to what you've clicked on (artist); if condition checks to see if the artist children have a class of hide
    if ($(this).children().hasClass('hide')) {
// if condition is true then it removed the class 'hide' from the artist children
      $(this).children().removeClass('hide');
// if condition is true then add the class 'hide' to the artist siblings children
      $(this).siblings().children().addClass('hide');
      // $(this).children().toggleClass('hide');
    } else{
//if condtion is false add class hide; the hide class hides the element
      $(this).children().addClass('hide');
      // $(this).children().toggleClass('hide');
    }

  })
