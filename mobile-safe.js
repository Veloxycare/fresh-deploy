<script>
if (window.innerWidth <= 767) {
  // Only basic fixes, NO form interference
  document.body.style.padding = '20px';
  document.body.style.maxWidth = '100vw';
  document.body.style.overflowX = 'hidden';
  
  // Fix images only
  var imgs = document.images;
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].style.maxWidth = '100%';
  }
}
</script>
