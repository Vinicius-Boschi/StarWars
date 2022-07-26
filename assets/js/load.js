function load() {
  let count = 2
  $(".cardContainer").slice(count).hide() 

  $('.loadButton').click(function() {
    count += 3 
      for (let i = 0; i < count; i++) { 
        $(".cardContainer").eq(i).show(800) 
      }
  }) 
}

load()