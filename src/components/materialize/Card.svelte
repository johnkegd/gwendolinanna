<script>
    import example250 from '../../node_modules/images/example-250x250.jpg';
    export let image = example250;
    export let title = "Card Title";
    export let links = [{placeholder:"This is a link",url:""}, {placeholder:"This is a link",url:""}];
    export let icon = "more_vert";
    export let description = "Here is some more information about this product that is only revealed once clicked on.";
</script>

<div class="card sticky-action">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="{image}" alt>
    </div>
    <div class="card-action">
      <span class="card-title activator grey-text text-darken-4">{title}<i class="material-icons right">{icon}</i></span>
      {#each links as link}
      <p><a href="{link.url}">{link.placeholder}</a></p>
      {/each}
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">{title}<i class="material-icons right">close</i></span>
      <p>{description}</p>
    </div>
  </div>