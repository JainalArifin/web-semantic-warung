$(document).ready(function(){
  var index = 0,
      items = $('.container-image div')
      total = items.length

  function slide(){
    var item  = $('.container-image div').eq(index);
        items.slideUp()
        item.slideDown()
  }

  var autoslide = setInterval(function(){
    index += 1;
    if( index > total -1 ) index = 0;
    slide()
  }, 2000)
})
