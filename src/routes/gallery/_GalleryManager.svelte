<script>
import GalleryItem from '../../components/GalleryItem.svelte';
export let items;
</script>

 <!-- Gallery -->
 <div id="portfolio" class="section">
<a href="gallery/create" class="btn waves">Create Card</a>
  <div class="container">
      <div class="gallery row">
        {#each items as item}
        <GalleryItem {...item}/>
        {/each}
      </div>
    </div><!-- /.container -->
  </div>