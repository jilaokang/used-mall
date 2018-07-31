<template>
    <div class="appnav">
        <div class="weui-flex">
            <div class="weui-flex__item" v-for="(item,index) in appnav" :key="index">
                <router-link :to="item.url">
                    <div class="icon">
                        <span class="iconfont" :class="item.icon"></span>
                    </div>
                    <p>{{item.nav}}</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                appnav: [
                    {nav: "电子产品", icon: "icon-phone", url: 'app/home'},
                    {nav: "服装衣帽", icon: "icon-cloth", url: 'app/search'},
                    {nav: "交通工具", icon: "icon-ziyuan", url: 'app/push'},
                    {nav: "生活用品", icon: "icon-coffee", url: 'app/message'},
                    {nav: "图书", icon: "icon-book", url: 'app/me'}
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/var";

    .appnav .weui-flex {
        background: white;
        .weui-flex__item{
            text-align: center;
            padding: 15px 3px 8px 3px;
        }
        .icon{
            width: $font-size-icon;
            height: $font-size-icon;
            background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
            border-radius: 50%;
            padding: 6px;
            margin: 0 auto;
        }
        .iconfont {
            text-align: center;
            color: #fff;
            line-height: $font-size-icon;
            font-size: 20px;
        }
        p {
            color: $color-grey__deep !important;
            font-size: $font-size-sm;
            line-height: 2.2;
        }

    }
</style>