var posts=["2023/12/14/hello-world/","2024/01/01/hexo/npm图床使用/","2024/01/12/svn/svn入门/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };