<script>
import GalleryItem from '../../components/GalleryItem.svelte';
import About from '../about.svelte';
export let Items;
</script>
 <!-- Gallery -->
 <div id="portfolio" class="section">
    <div class="container">
      <div class="gallery row">
        {#each Items as item}
        <GalleryItem {...item}/>
        {/each}

      </div>
    </div><!-- /.container -->
  </div>