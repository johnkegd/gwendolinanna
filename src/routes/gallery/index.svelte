<script context="module">
export async function preload(page, session) {
    const res = await this.fetch('/gallery.json');
    const items = await res.json();
    return {items};
}
</script>

<script>
    export let items;
    import GalleryManager from './_GalleryManager.svelte';
</script>

<svelte:head>
    <title>Gallery</title>
</svelte:head>

<GalleryManager {items}/>