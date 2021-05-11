<script>
import GalleryItem from '../../components/GalleryItem.svelte';
import Nester from '../../components/Nester.svelte';
export let items;
</script>

<!-- 
 <div id="portfolio">
<a href="gallery/create" class="btn waves">Create Card</a>
  <div class="container">
      <div class="gallery row">
        {#each items as item}
        <GalleryItem {...item}/>
        {/each}
      </div>
    </div>
  </div>
 -->
  <Nester>
    <div slot="floor-1">
      {#each items as item}
      <GalleryItem {...item}/>
      {/each}
    </div>
  </Nester>