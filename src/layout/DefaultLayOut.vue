<template>
    <div class="layout">
        <topbar class="topbar"/>
        <sidebar class="sidebar"/>
        <Content class="content">
            <slot></slot> 
        </Content>
    </div>
</template>
<script>
import Content from "./Content.vue"
import sidebar from "./Sidebar.vue"
import topbar from "./Topbar.vue"
import { defineComponent } from 'vue';
export default defineComponent({
    name:"default-layout",
    components:{
        sidebar,
        topbar,
        Content},
    setup(){

    }
})
</script>
<style scoped>
.layout{
    position: relative;
    top: 0;
    left: 0;
}
.sidebar{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
}
.topbar{
    position: fixed;
    top: 0;
    left: 128px;
    z-index: 9;
}
.content{
    position: absolute;
    left: 128px;
}
</style>