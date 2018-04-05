function createPost() {
  let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
  let postTemplate = _.template(document.getElementById("post-template").innerHTML);

  let postTitle = document.getElementById("postTitle").value;
  let postAuthor = document.getElementById("postAuthor").value;
  let postContent = document.getElementById("postContent").value;

  let postDiv = document.getElementById("post");
  let templateHTML = templateFn({ 'post': postContent, 'poster': postAuthor, 'title': postTitle});

  postDiv.innerHTML += templateHTML;
}

function postComment() {
  let commenter = document.getElementById("commenterName").value;
  let comment = document.getElementById("commentText").value;
  let commentTemplate = document.getElementById("comment-template").innerHTML;

  let templateFn = _.template(commentTemplate);
}
