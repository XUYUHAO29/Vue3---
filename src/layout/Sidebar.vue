<template>
    <div>
        <el-menu
            class="el-menu-vertical-demo"
            default-active="2"
            text-color="#fff"
            @open="handleOpen"
            @close="handleClose"
            ref="memu"
        >
            <el-scrollbar class="scrollbar" ref="scrollbar">
                <el-menu-item
                    v-for="item,index in state.items"
                    :index="item.id"
                    :key="item.id"
                    :class="item.id"
                    @click="routerTo(item, index)"
                >
                    <span>{{ item.text }}</span>
                </el-menu-item>
            </el-scrollbar>
        </el-menu>
    </div>
</template>
<script>
import items from "../static/json/sidebar-item.json"
import { defineComponent, reactive, onMounted } from 'vue';
import { useRouter } from "vue-router";
// import { debounce } from "../uilts/debounce"
export default defineComponent({
    name:"lo-sidebar",
    setup(){
        const state = reactive({
            items:items
        })
        const router = useRouter()
        const handleOpen = (key, keyPath) => {
            console.log(key, keyPath)
        }
        const handleClose = (key, keyPath) => {
            console.log(key, keyPath)
        }
        const routerTo = (item, index) => {
            clickChangeColor(index)
            router.push({
                name: item["router-name"]
            })
        }
        //改变背景颜色 
        let preNodeIndex = 0
        const clickChangeColor = (curIndex) => {
            if(preNodeIndex !== curIndex) {
                const el_menu = document.querySelectorAll(".el-menu-item")
                el_menu[curIndex].style.color = "green"
                el_menu[curIndex].style.backgroundColor = "rgb(180, 166, 199)"

                el_menu[preNodeIndex].style.color = "aqua"
                el_menu[preNodeIndex].style.background = "#545c64"
                preNodeIndex = curIndex
            }
        }

        const resetScrollbarWidth = () =>{
            if(document.querySelector(".el-menu-vertical-demo").offsetHeight  > document.querySelector(".scrollbar").offsetHeight ){
                document.querySelector(".el-menu-vertical-demo").style.setProperty("--scrollbarWidth", "0px")
            } else {
                document.querySelector(".el-menu-vertical-demo").style.setProperty("--scrollbarWidth", "6px")
            }
        }
        onMounted(()=>resetScrollbarWidth())
        // const debounceResetScrollbarWidth = debounce(resetScrollbarWidth, 0)
        window.addEventListener("resize", resetScrollbarWidth);
        return{
            handleOpen,
            handleClose,
            state,
            routerTo
        }
    }
})
</script>
<style scoped>
.el-menu-vertical-demo{
    --scrollbarWidth: 6px;
    color: whitesmoke;
    background-color:#545c64;
    overflow-x: hidden;
    height: 100vh;
    z-index: 999;
}
.el-menu-vertical-demo::-webkit-scrollbar{
    width:var(--scrollbarWidth);
}
.el-menu-vertical-demo::-webkit-scrollbar-track{
    background-color: transparent;
    position: absolute;
    left: 10px;
}
.el-menu-vertical-demo::-webkit-scrollbar-thumb{
    background: #bfbfbf;
    border-radius:30px;
}
.el-menu-item{
    color: aqua;
    background-color:#545c64;
    list-style-type: none;
    width: calc(128px - var(--scrollbarWidth));
    padding: 10px 0;
    cursor: pointer;
    text-indent: 40px;
    font-size: 14px;
}
.el-menu-item:hover{
    color: green;
    background-color: rgb(180, 166, 199);
}

.addclick{
    color: green;
    background-color: rgb(180, 166, 199);
}
</style>