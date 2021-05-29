<script>
import FormPart from './Parts/LoginFormPart.svelte';
</script>


<form>

    <FormPart inputType="Email" labelForId="grid-email"/>
    
    <FormPart inputType="Password" labelForId="grid-password"/>

    <FormPart 
        inputType="checkbox" 
        labelForId="customCheckLogin" 
        styles="inline-flex items-center cursor-pointer">
        Remember me
    </FormPart>
 
</form>