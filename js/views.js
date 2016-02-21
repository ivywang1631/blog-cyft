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
  $(".index-page").hide();
  $(".archive-page").hide();
  $(".add-post-page").show();
}
