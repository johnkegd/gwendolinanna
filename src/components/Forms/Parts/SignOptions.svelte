<script>
export let styles = "rounded-t mb-0 px-6 py-6";
</script>

<div class="{styles}">
    <div class="text-center mb-3">
        <slot name="title"></slot>
    </div>
    <div class="btn-wrapper text-center">
        <slot name="buttons"></slot>
    </div>
</div>