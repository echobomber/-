$(document).ready(function() {
    $('.Menu-toggle').on('click',  function(e){
       e.preventDefault();
       $('.topNav').toggleClass('openMenu');
   });
 });