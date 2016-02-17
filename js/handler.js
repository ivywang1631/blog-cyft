$("#nav-archive").click(function(){
  archiveShow();
  api.listArchive(function(error, data){
    $(".archive-content").html("");
    data.forEach(function(post){
      $(".archive-content").append("<div class='post-preview'><a href='single_post.html'><h2 class='post-title'>" + post.title + "</h2></a><p class='post-meta'>" + post.text + "</div><hr>");
    });

  })
})

$("#nav-index").click(function(){
  indexShow();
})



