function form2object(form) {
  var data = {};
  $(form).find("input").each(function(index, element) {
    var type = $(this).attr('type');
    if ($(this).attr('name') && type !== 'submit' && type !== 'hidden') {
      data[$(this).attr('name')] = $(this).val();
    }
  });
  return data;
};

function archiveHandler(){
  archiveShow();
  // loop through all posts for view rendering
  api.listArchive(function(error, data){
    if(error) console.error(error);
    // $(".archive-content").html("");
    data.forEach(function(post){
      $(".archive-content").append("<div class='post-preview'><a href='single_post.html'><h2 class='post-title'>" + post.title + "</h2></a><p class='post-meta'>" + post.text + "</div><hr>");
    });
  })
}

$(document).ready(function(){
  $("#nav-archive").click(function(){
    archiveHandler();
  })

  $("#nav-index").click(function(){
    indexShow();
  })

  $("#nav-add-post").click(function(){
    addPostShow();
  })

  $(".post-form").on("submit",function(e){
    e.preventDefault();
    // JSON constructor
    var postInfo = form2object(this);
    // create post
    api.createPost(postInfo, function(error, data){
      if(error) console.error(error);
      // redirect user to archive page after post creation & populate views
      archiveHandler();
    })

  })
})


