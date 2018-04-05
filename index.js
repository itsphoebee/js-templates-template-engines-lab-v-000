function createPost() {
  var poster = document.getElementById("posterName").value;
  var post = document.getElementById("postContent").value;
  var postTemplate = document.getElementById("post-template").innerHTML;
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
