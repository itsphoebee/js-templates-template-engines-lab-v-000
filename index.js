function createPost() {
  var poster = document.getElementById("posterName").value;
  var post = document.getElementById("postContent").value;
  var postTemplate = document.getElementById("post-template").innerHTML;
  var templateFn = _.template(postTemplate);
  var postsDiv = document.getElementById("posts");
  var templateHTML = templateFn({ 'post': post, 'poster': poster });
 
  postsDiv.innerHTML += templateHTML;
}
