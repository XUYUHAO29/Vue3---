<template>
    <div class="recommend">
        <div class="carousel">
            <carousel />
        </div>
    </div>
</template>
  
<script>
import { defineComponent } from 'vue';
import carousel from "./_carousel.vue"
export default defineComponent({
    name: "vi_recommend",
    components: { carousel }
})
</script>
  
<style scoped>
.recommend{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.carousel{
    width: 100vw;
    height: 330px;
    /* background-color: aqua; */
}

</style>
  