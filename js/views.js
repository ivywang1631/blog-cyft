function indexShow(){
  $(".archive-page").hide();
  $(".add-post-page").hide();
  $(".index-page").show();
}

function archiveShow(){
  $(".index-page").hide();
  $(".add-post-page").hide();
  $(".archive-page").show();
}

function addPostShow(){
  $(".post-form").find("input[type=text], textarea").val("");
  $(".index-page").hide();
  $(".archive-page").hide();
  $(".add-post-page").show();
}
