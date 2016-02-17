var form2object = function(form) {
  var data = {};
  $(form).find("input").each(function(index, element) {
    var type = $(this).attr('type');
    if ($(this).attr('name') && type !== 'submit' && type !== 'hidden') {
      data[$(this).attr('name')] = $(this).val();
    }
  });
  return data;
};

var wrap = function wrap(root, formData) {
  var wrapper = {};
  wrapper[root] = formData;
  return wrapper;
};

$(document).ready(function(){
  $("#nav-archive").click(function(){
    archiveShow();
    api.listArchive(function(error, data){
      if(error) console.error(error);
      $(".archive-content").html("");
      data.forEach(function(post){
        $(".archive-content").append("<div class='post-preview'><a href='single_post.html'><h2 class='post-title'>" + post.title + "</h2></a><p class='post-meta'>" + post.text + "</div><hr>");
      });

    })
  })

  $("#nav-index").click(function(){
    indexShow();
  })

  $("#nav-add-post").click(function(){
    addPostShow();
  })

  $(".post-form").on("submit",function(e){
    e.preventDefault();
    var postInfo = wrap('post', form2object(this));
    console.log(JSON.stringify(postInfo));
    api.createPost(postInfo, function(error, data){
      if(error) console.error(error);
      console.log(JSON.stringify(data));
    })

  })
})


