<template>
    <div>
        <div class="weui-flex">
            <div class="weui-flex__item">
                时间 <span>&#9650;</span>
            </div>
            <div class="weui-flex__item">
                价格 <span>️&#9660;</span>
            </div>
        </div>
        <good class="why"></good>
        <nomore></nomore>
    </div>
</template>

<script>
    import good from '../components/good'
    import nomore from '../components/nomore'

    export default {
        name: "list",
        components: {good,nomore}
    }
</script>

<style lang="scss" scoped>
    @import "../scss/var";

    .weui-flex {
        text-align: center;
        background: white;
        border-bottom: 1px solid $color-grey;
        line-height: 3;
        .weui-flex__item {
            span {
                font-size: 0.8rem;
            }
            &:hover {
                color: $color-orange;
            }
        }
    }
</style>