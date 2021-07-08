<script>
    import Icon from '../Icons/Icon.svelte';
    export let styles;
    export let iconType = "fas fa-frown";
    export let iconContainer = "div";
    export let iconStyles;


    function nestChild(_parent, cls, deep) {
        let _el = document.createElement(iconContainer);
        if (--deep) {
            nestChild(_el,cls,deep);
        }
        _el.classList.add(cls[deep]);
        _parent.appendChild(_el);
    }
</script>


<div class="{styles}">
    <Icon
        container="{iconContainer}"
        containerStyles="{iconStyles}"
        type="{iconType}"
    />
    <slot></slot>
</div>
