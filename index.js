function createPost() {
  var page = document.getElementById("page-template").value

  var postTitle = document.getElementById("header").value;
  var postAuthor = document.getElementById("footer").value;

  var post-template = document.getElementById("post-template").innerHTML;
  var templateFn = _.template(postTemplate);

  var postsDiv = document.getElementById("posts");
  var templateHTML = templateFn({ 'post': post, 'poster': poster });

  postsDiv.innerHTML += templateHTML;
}

function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;
  var commentTemplate = '<div class="comment"><p><%= comment %></p><p>Posted By: <span class="commenter"><%= commenter %></span></p></div>';

  var templateFn = _.template(commentTemplate);
}
