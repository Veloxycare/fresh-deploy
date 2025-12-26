<script>
// Mobile fix
if (window.innerWidth <= 767) {
  document.body.style.padding = '20px';
  document.body.style.maxWidth = '100vw';
  document.body.style.overflowX = 'hidden';
  var imgs = document.images;
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].style.maxWidth = '100%';
  }
}
</script>
