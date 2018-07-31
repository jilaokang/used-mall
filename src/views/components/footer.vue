<template>
    <footer class="menu">
        <div class="container weui-flex">
            <div class="weui-flex__item" v-for="(item,index) in appnav"
                 :key="index">
                <router-link :to="item.url">
                    <div :class="index == 2 ?'menu-push':''">
                        <span class="iconfont" :class="item.icon"></span>
                    </div>
                    <p v-if="index != 2">{{item.nav}}</p>
                </router-link>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        data() {
            return {
                appnav: [
                    {nav: "首页", icon: "icon-home1", url: '/app'},
                    {nav: "搜索", icon: "icon-icon19", url: '/app/search'},
                    {nav: "发布", icon: "icon-add1", url: '/app/push'},
                    {nav: "消息", icon: "icon-message01", url: '/app/message'},
                    {nav: "我的", icon: "icon-me", url: '/app/me'}
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/var";

    .menu {
        text-align: center;
        position: fixed;
        bottom: 0;
        width: 100%;
        background: white;
        border-top: 1px solid $color-grey;
        padding: {
            top: 0.4rem !important;
            bottom: 0.4rem !important;
        }
        .weui-flex__item {
            line-height: $line-height;
            .iconfont {
                color: $color-grey__deep;
                font-size: $font-size-icon;
            }
            p {
                color: $color-grey__deep;
                font-size: $font-size-sm;
            }
            &:hover {
                .iconfont, p {
                    color: $color-orange;
                }
            }
        }
        .menu-push {
            width: 2rem;
            height: 2rem;
            padding: 6px;
            margin: -1.6rem auto 0;
            background: $color-orange;
            border-radius: 50%;
            .iconfont, p {
                color: #fff;
                line-height: 2rem;
                font-size: 26px;
                font-weight: 800;
            }
            &:hover {
                p, .iconfont {
                    line-height: 2rem;
                    color: $color-orange;
                }
                border: 3px solid $color-orange;
                transform: rotate(90deg);
                background: #fff;
                -webkit-transition: transform 0.6s;
            }
        }
    }
</style>