<template>
    <div>
        <div class="topimg">
        </div>
        <menulist></menulist>
        <news></news>
        <div class="weui-cells__title">为您推荐
            <router-link to="/list">
                <span class="more">更多</span>
            </router-link>
        </div>
        <agood></agood>
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

    export default {
        name: "home",
        components: {agood, menufooter, menulist, news, placeholder,nomore}
    };
</script>

<style lang="scss">
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

</style>
