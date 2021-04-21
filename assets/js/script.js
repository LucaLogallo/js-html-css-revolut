$(function(){
  var dropDownMenu = $('.ddmenu');

  $(document).on('mouseenter', '.withdd ', function(){
    console.log(this);
    // ad ogni singolo .ddmenu 
    $(this).children().addClass('active');
  });
})