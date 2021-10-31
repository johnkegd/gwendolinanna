<script>
  let className = "";
  export { className as class };
</script>

<section class={className}>
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap">
      <!-- i don't want to set a name or wrapper to this slot for the moment-->
      <!-- cardIcons children comming via slot-->
      <slot name="head" />
      <div class="flex flex-wrap items-center mt-32">
        <slot />
      </div>
    </div>
  </div>
</section>
