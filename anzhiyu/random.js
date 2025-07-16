var posts=["2024/01/17/algorithm/数位DP/","2024/01/01/hexo/npm图床使用/","2025/07/08/hexo/自动化部署/","2025/07/15/github/关于GitHub,PicGo和Typora使用小结/","2024/01/14/svn/TortoiseSVN基本使用/","2024/01/16/svn/svn仓库目录详解/","2024/01/12/svn/svn入门/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };