<script>
import FormPart from './Parts/LoginFormPart.svelte';
import BoyGrapicArt from '../GraphicArts/Boy.svelte';
</script>


<form>
    <BoyGrapicArt/>

    <FormPart inputType="Email" labelForId="grid-email"/>

    <FormPart inputType="Password" labelForId="grid-password"/>

    <FormPart 
        inputType="checkbox" 
        labelForId="customCheckLogin" 
        styles="inline-flex items-center cursor-pointer">
        Remember me
    </FormPart>
 
</form>
<hr class="mt-6 border-b-1 border-blueGray-300" />