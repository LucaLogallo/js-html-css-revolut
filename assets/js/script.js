$(function(){

  $(document).on('mouseenter', '.withdd ', function(){
    console.log(this);
    // ad ogni singolo .ddmenu 
    $('.ddmenu').removeClass('active');
    $(this).children('.ddmenu').addClass('active');
  });

  $(document).on('click', '.withdd ', function(){
    console.log(this);
    // ad ogni singolo .ddmenu 
    $(this).children('.ddmenu').toggleClass('active');
  });
})