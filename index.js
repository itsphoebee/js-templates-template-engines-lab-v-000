function createPost() {
  let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
  let postTemplate = _.template(document.getElementById("post-template").innerHTML);

  let postTitle = document.getElementById("postTitle").value;
  let postAuthor = document.getElementById("postAuthor").value;
  let postContent = document.getElementById("postContent").value;

  let postDiv = document.getElementById("post");
  let templateHTML = postTemplate({ 'post': postContent, 'poster': postAuthor, 'title': postTitle});

  postDiv += templateHTML;
}

function postComment() {
  let commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  let commenter = document.getElementById("commenterName").value;
  let comment = document.getElementById("commentText").value;
  let commentTemplate = document.getElementById("comment-template").innerHTML;

  let templateHTML = commentTemplate({ 'commenter': commenterName, 'comment': commentText});
  let commentsTemplate = document.getElementById("comments");
  
  commentsTemplate.innerHTML += templateHTML
}
