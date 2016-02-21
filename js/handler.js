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
    var postId = e.target.id.split("-")[1];
    api.deletePost(postId, function(error, data){
      if(error) console.error(error);
      archiveHandler();
    })
  })
}

function editHandler(){
  $(".edit").click(function(e){
    var postId = e.target.id.split("-")[1];
    var currentPost;
    editPostShow();
    api.listPost(postId, function(error, data){
      if(error) console.error(error);
      currentPost = data;
      // auto populate form fields
      $(".edit-post-form").find(":input").each(function(index, element) {
        if ($(this).attr("name") === "title") {$(this).attr("value", currentPost.title);}
        if ($(this).attr("name") === "text") {$(this).val(currentPost.text);}
      })
    })
    // update form listener
    $(".edit-post-form").on("submit", function(e){
      e.preventDefault();
      // JSON constructor
      var postInfo = wrap('v1_post', form2object(this));
      // update post
      api.updatePost(postId, postInfo, function(error, data){
        if(error) console.error(error);
        // redirect user to archive page after post creation & populate views
        archiveHandler();
      })
    })
  })
}

function initIndex(){
  api.listArchive(function(error, data){
    if(error) console.error(error);
    // sort posts by creation dates (descending)
    var latestPosts = data.posts.sort(function(a, b){
      return new Date(b.created_at) - new Date(a.created_at);
    }).shift();
    $("#index-article").html("<div class='container'><div class='row'><div class='col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1'>Latest Post:</div></div><div class='row'><div class='col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1'><div class='post-heading'><h1>" + latestPosts.title + "</h1><span class='meta' style='font-size: 14px; font-style: italic'>Created at :" + new Date(latestPosts.created_at) + "</span></div></div></div></div><div class='container'><div class='row'><div class='col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1'><p>" + latestPosts.text + "</p></div></div></div>");
  })
}


function archiveHandler(){
  archiveShow();
  // loop through all posts for view rendering
  api.listArchive(function(error, data){
    if(error) console.error(error);
    $(".archive-content").html("");
    // sort posts by creation dates (descending)
    var sortedPosts = data.posts.sort(function(a, b){
      return new Date(b.created_at) - new Date(a.created_at);
    });
    sortedPosts.forEach(function(post){
      $(".archive-content").append("<div class='post-preview' id='" + post.id + "'><a href='single_post.html'><h2 class='post-title'>" + post.title + "</h2></a><p class='post-meta'>" + post.text + "</div><div style='font-size: 14px; font-style: italic'>Created at: " + new Date(post.created_at) + "</div><div><a><div style='float: left;margin-right: 20px;' class='edit' id='edit-" + post.id + "'>Edit</div></a><a><div class='delete-post' id='delete-" + post.id + "'>Delete</div></a></div><hr>");
    });
    deleteHandler();
    editHandler();
  })
}

$(document).ready(function(){
  initIndex();

  $("#nav-archive").click(function(){
    archiveHandler();
  })

  $("#nav-index").click(function(){
    indexShow();
    initIndex();
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
      // redirect user to archive page after post creation & populate views
      archiveHandler();
    })
  })
})


