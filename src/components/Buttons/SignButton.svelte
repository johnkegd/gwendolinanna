<script>
    export let styles = "bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150";
    export let type = "button";
</script>

<button class="{styles}" type="{type}">
    <slot></slot>
</button>