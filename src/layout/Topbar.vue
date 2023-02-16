<template>
    <div class="topbar" ref="topbar">
        <div class="topbar-m">
            <div class="search left-right-margin" ref="search">
                <input
                    v-model="state.searcchText"
                    placeholder="Please input"
                    class="input"
                >
                <div class="icon" />
            </div>
            <div class="account-picture left-right-margin" />
            <div class="clock left-right-margin" />
            <div class="download left-right-margin" />
            <div class="game left-right-margin" />
            <div class="menu-block left-right-margin" />
            <div class="menu-line left-right-margin"></div>
            <div class="minimize left-right-margin" @click="minimizeWindow"></div>
            <div class="maximize left-right-margin" @click="maximizeWindow"></div>
            <div class="close left-right-margin" @click="closeWindow"></div>
        </div>
    </div>
</template>
<script>
import { defineComponent, reactive, getCurrentInstance } from 'vue';
import debounce from "../uilts/debounce"
import { ipcRenderer } from 'electron';
// import "../preload/topBarEvent"
export default defineComponent({
    name:"lo-topbar",
    setup(){
        const state = reactive({
            searcchText:""
        })
        const instance = getCurrentInstance()

        const changeSearch = () =>{
            if(instance.refs["topbar"].clientWidth > 1022){
                instance.refs["search"].style.width = 330 + "px"
            } else {
                instance.refs["search"].style.width = 230 + "px"
            }
        }

        const closeWindow = () => {
            ipcRenderer.send("window-close")
        }
        const maximizeWindow = () => {
            ipcRenderer.send("window-max")
        }
        const minimizeWindow = () => {
            ipcRenderer.send("window-min")
        }
        const debounceChangeSearch = debounce(changeSearch, 500)
        window.addEventListener("resize", debounceChangeSearch)
        return{
            state,
            closeWindow,
            maximizeWindow,
            minimizeWindow
        }
    }
})
</script>
<style scoped>
.topbar{
    width: calc(100% - 128px);
    height: 62px;
    background-color: rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    /* flex-direction: column; */
    -webkit-app-region: drag;
    /* z-index: ; */
}
.topbar-m{
    height: 100%;;
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
    z-index: 9;
}
.search{
    position: relative;
    display: flex;
    align-items: center;
    width: 230px;
    transform: all 1.5s;
    -webkit-app-region: no-drag 
}
.input{
    position: relative;
    outline: none;
    border-radius: 3px;
    border: 0px solid transparent;
    height: 32.5px;
    background-color: aqua;
    width: 100%;
    -webkit-app-region: no-drag 
}
.icon{
    position: absolute;
    right: 10px;
    width: 18px;
    height: 18px;
    background-image: url("../static/img/搜索.svg");
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
    z-index: 999;
    -webkit-app-region: no-drag 
}
.icon::after{
    content: "";
    position: absolute;
    left: -7px;
    top: 2px;
    width: 18px;
    height: 16px;
    border-left: 1px solid white;
}
.account-picture{
    height: 32.5px;
    width: 32.5px;
    background-image: url("../static/img/头像修改.svg");
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
    -webkit-app-region: no-drag 
}
.clock{
    height: 20px;
    width: 20px;
    background-image: url("../static/img/时钟-fill.svg");
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
    -webkit-app-region: no-drag 
}
.download{
    height: 20px;
    width: 20px;
    background-image: url("../static/img/下载.svg");
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
    -webkit-app-region: no-drag 
}
.game{
    height: 20px;
    width: 20px;
    background-image: url("../static/img/游戏.svg");
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
    -webkit-app-region: no-drag 
}
.menu-block{
    height: 20px;
    width: 20px;
    background-image: url("../static/img/菜单-方块.svg");
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
    position: relative;
    -webkit-app-region: no-drag 
}
.menu-block::after{
    content: "";
    position: absolute;
    left: 9px;
    width: 20px;
    height: 20px;
    border-right: .5px solid rgba(255,255,255,0.5) ;
    /* margin: 0 px; */
}
.menu-line{
    height: 20px;
    width: 20px;
    background-image: url("../static/img/菜单-横线.svg");
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
    position: relative;
    -webkit-app-region: no-drag 
}
.minimize{
    height: 20px;
    width: 20px;
    background-image: url("../static/img/最小化.svg");
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
    position: relative;
    -webkit-app-region: no-drag 
}
.maximize{
    height: 17px;
    width: 17px;
    background-image: url("../static/img/最大化.svg");
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
    position: relative;
    -webkit-app-region: no-drag 
}
.close{
    height: 20px;
    width: 20px;
    background-image: url("../static/img/关闭.svg");
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
    position: relative;
    -webkit-app-region: no-drag 
}
.left-right-margin{
    margin: 0 10px;
}
</style>