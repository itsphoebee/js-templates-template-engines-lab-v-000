function createPost() {
  let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  
  var postTitle = document.getElementById("postTitle").value;
  var postAuthor = document.getElementById("postAuthor").value;
  var postContent = document.getElementById("postContent").value;

  var postTemplate = document.getElementById("post-template").innerHTML;
  var templateFn = _.template(postTemplate);

  var postDiv = document.getElementById("post");
  var templateHTML = templateFn({ 'post': postContent, 'poster': postAuthor, 'title': postTitle});

  postDiv.innerHTML += templateHTML;
}

function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;
  var commentTemplate = document.getElementById("comment-template").innerHTML;

  var templateFn = _.template(commentTemplate);
}
