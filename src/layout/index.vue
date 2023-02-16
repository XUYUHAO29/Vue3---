<template>
    <defaultlayout>
        <router-view>
            <slot></slot>
        </router-view>
    </defaultlayout>
</template>
<script>
import defaultlayout from "./DefaultLayOut.vue"
import { defineComponent } from "vue";
export default defineComponent({
    name:"lo-layout",
    components:{ defaultlayout }

})
</script>
<style scoped>
</style>