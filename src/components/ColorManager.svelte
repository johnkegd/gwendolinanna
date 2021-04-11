<script>
let value;
let colors = [];
function submitHanlder() {
    colors = colors.concat(value);
    value = '';
}
</script>


<form on:submit|preventDefault="{submitHanlder}">
<input type="text" name="" id="" bind:value required>
</form>

<slot {colors}/>
