let n = 0;
  $(clickMe).on('click', function() {
    if (n === 0) {
      $(popover).show()
      setTimeout(function() {
      $(document).one('click', function() {
        $(popover).hide()
           n = 0
        })
      }, 0)
       n = 1
    } else {
      $(popover).hide()
        n = 0
      }
  })
  $(usercard).on('click', function(e) {
      e.stopPropagation()
    })
