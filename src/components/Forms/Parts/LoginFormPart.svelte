<script>
  export let styles = "relative w-full mb-3";
  export let labelStyles =
    "block uppercase text-blueGray-600 text-xs font-bold mb-2";
  export let labelForId;
  export let inputType;
  export let placeholder;

  var email;
  var password;
</script>

{#if inputType != "checkbox"}
  <div class={styles}>
    <label class={labelStyles} for={labelForId}>
      <slot />
    </label>
    <input
      id={labelForId}
      type={inputType.toLowerCase()}
      class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
      placeholder={placeholder ? placeholder : inputType}
    />
  </div>
{:else if inputType === "checkbox"}
  <div>
    <label class={styles}>
      <input
        id={labelForId}
        type={inputType}
        class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
      />
      <span class="ml-2 text-sm font-semibold text-blueGray-600">
        <slot />
      </span>
    </label>
  </div>
{/if}
