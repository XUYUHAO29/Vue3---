<template>
    <div class="content-in-Content">
        <slot></slot> 
    </div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name:"lo-content"
})
</script>
<style scoped>
.content-in-Content{
    width: calc(100% - 128px);
    height: 100vh;
    /* background-color: red; */
    overflow-x:hidden;
}
.content-in-Content::-webkit-scrollbar{
    width: 0;
}
</style>    