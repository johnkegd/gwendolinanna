<script>
  import Icon from "../Icons/Icon.svelte";
  export let liStyles = "py-2";
  export let title;
  export let titleStyles = "text-blueGray-500";
  export let iconType;
  export let iconStyles =
    "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-red-200 mr-3";
  export let iconWrapper = true;
</script>

<li class={liStyles}>
  <div class="flex items-center">
    <Icon
      color="text-red-600"
      wrapper={iconWrapper}
      defaultClasses={iconStyles}
      type={iconType}
    />
    <div>
      <h4 class={titleStyles}>
        {title}
      </h4>
    </div>
  </div>
</li>
