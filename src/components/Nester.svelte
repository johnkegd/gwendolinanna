<script>
export let clsChildrens = ["floor-0","floor-1","floor-2","floor-3"];
</script>

<!-- TODO iterate clsChildrens arrays and create dynamic floors-->
<slot>
    <div class="{clsChildrens[0]}">
        <slot name="floor-0">
            <div class="{clsChildrens[1]}">
                <slot name="floor-1">
                    <div class="{clsChildrens[2]}">
                        <slot name="floor-2">
                            <div class="{clsChildrens[3]}">
                                <slot name="floor-3"></slot>
                            </div>
                        </slot>
                    </div>
                </slot>
            </div>
        </slot>
    </div>
</slot>