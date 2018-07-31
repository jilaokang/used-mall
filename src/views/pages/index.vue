<template>
    <div>
        <div class="topimg">
        </div>
        <menulist></menulist>
        <news :data="news"></news>
        <div class="weui-cells__title">为您推荐
            <router-link to="/list#tui">
                <span class="more">更多</span>
            </router-link>
        </div>
        <agood :data="tui"></agood>
        <div class="weui-cells__title">大家在看
            <router-link to="/list#look">
                <span class="more">更多</span>
            </router-link>
        </div>
        <agood :data="look"></agood>
        <nomore></nomore>
    </div>
</template>

<script>
    import agood from '../components/good.vue'
    import menufooter from '../components/footer'
    import menulist from '../components/menulist'
    import news from '../components/news'
    import placeholder from '../components/placeholder'
    import nomore from '../components/nomore'

    import {home} from '../../service/data'

    export default {
        components: {agood, menufooter, menulist, news, placeholder, nomore},
        data() {
            return {
                // 轮播图部分
                banner: "",
                // nav部分
                cates: "",
                // 产品
                look: "",
                // 轮播新闻
                news: "",
                tui: ""
            }
        },
        created() {
            home.then(res => {
                this.banner = res.data.banner;
                this.cates = res.data.cates;
                this.news = res.data.news;
                this.tui = res.data.tui;
                this.look = res.data.look;

                console.log(this.look)
            })
        }
    };
</script>

<style lang="scss" scoped>
    @import url("http://at.alicdn.com/t/font_675461_2x7sbu9j2zw7b9.css");
    @import "../scss/var";

    .topimg {
        height: 26vh;
        background: {
            image: url("../../assets/img/img2.jpg");
            position: center;
            size: cover;
        }
    }

    .more {
        color: $color-orange;
        float: right;
    }

    .weui-cells__title:nth-child(0), .weui-cells__title:nth-child(1) {
        background-color: white;
        line-height: 2.5;
        margin: 0 !important;
        border-bottom: 1px solid $color-grey__bg;
        margin-top: 8px !important;
        font-weight: 800;
        .weui-cells__title {

        }
    }
</style>
