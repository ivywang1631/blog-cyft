function form2object(form) {
  var data = {};
  $(form).find(":input").each(function(index, element) {
    var type = $(this).attr('type');
    if ($(this).attr('name') && type !== 'submit' && type !== 'hidden') {
      data[$(this).attr('name')] = $(this).val();
    }
  });
  return data;
};

function wrap(root, formData) {
  var wrapper = {};
  wrapper[root] = formData;
  return wrapper;
};

function deleteHandler(){
  $(".delete-post").click(function(e){
    postId = e.target.id.split("-")[1];
    api.deletePost(postId, function(error, data){
      if(error) console.error(error);
      archiveHandler();
    })
  })
}


function archiveHandler(){
  archiveShow();
  // loop through all posts for view rendering
  api.listArchive(function(error, data){
    if(error) console.error(error);
    $(".archive-content").html("");
    data.posts.forEach(function(post){
      $(".archive-content").append("<div class='post-preview' id='" + post.id + "'><a href='single_post.html'><h2 class='post-title'>" + post.title + "</h2></a><p class='post-meta'>" + post.text + "</div><div><a><div style='float: left;margin-right: 20px;' class='edit' id='edit-" + post.id + "'>Edit</div></a><a><div class='delete-post' id='delete-" + post.id + "'>Delete</div></a></div><hr>");
    });
    deleteHandler();
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
    var postInfo = wrap('v1_post', form2object(this));
    //create post
    api.createPost(postInfo, function(error, data){
      if(error) console.error(error);
      console.log(data);
      // redirect user to archive page after post creation & populate views
      archiveHandler();
    })
  })

})


