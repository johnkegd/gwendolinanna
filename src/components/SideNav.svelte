<script>
  import logo from '../node_modules/images/logo-2.svg';
  export let segment;
</script>

<ul class="sidenav" id="nav-mobile">
  <li class="active"><a href="."><img src={logo} with="40" height="40" alt="gwendolin app"></a></li>
  <li class:active={segment === undefined}><a href=".">Home</a></li>
  <li class:active={segment === "gallery"}><a rel=prefetch href="gallery">Gallery</a></li>
  <li class:active={segment === "about"}><a href="about">About</a></li>
  <li class:active={segment === "blog"}><a href="blog">Blog</a></li>
</ul>