function indexShow(){
  $(".archive-page").hide();
  $(".add-post-page").hide();
  $(".edit-post-page").hide();
  $(".index-page").show();
}

function archiveShow(){
  $(".index-page").hide();
  $(".add-post-page").hide();
  $(".edit-post-page").hide();
  $(".archive-page").show();
}

function addPostShow(){
  $(".post-form").find("input[type=text], textarea").val("");
  $(".index-page").hide();
  $(".archive-page").hide();
  $(".edit-post-page").hide();
  $(".add-post-page").show();
}

function editPostShow() {
  $(".index-page").hide();
  $(".archive-page").hide();
  $(".edit-post-page").show();
  $(".add-post-page").hide();
}
