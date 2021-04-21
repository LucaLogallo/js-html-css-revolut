$(function(){

  $(document).on('mouseenter click', '.withdd a', function(){
    console.log(this);
    // ad ogni singolo .ddmenu 
    $(this).next().toggleClass('active');
  });

 /*  $(document).on('click', '.withdd a', function(){
    console.log(this);
    // ad ogni singolo .ddmenu 
    $(this).children().removeClass('active');
  }); */
})