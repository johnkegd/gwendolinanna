<script>
import GalleryItem from '../../components/GalleryItem.svelte';
export let Items;
</script>
 <!-- Gallery -->
 <div id="portfolio" class="section">
    <div class="container">
      <div class="gallery row">
        {#each Items as item}
        <GalleryItem 
        title={item.title} 
        description={item.description} 
        price={item.price} 
        image={item.image}
        category={item.category}
        />
        {/each}

      </div>
    </div><!-- /.container -->
  </div>