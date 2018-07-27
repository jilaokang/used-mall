<template>
    <div class="mygood">
        <div class="weui-cells">
            <div class="weui-cell">
                <div class="weui-cell___hd mygood-img" style="width: 50px">
                </div>
                <div class="content">
                    <p class="title">好手机啊</p>
                    <div class="money">￥500.0</div>
                    <div class="buttonlist">
                        <a href="#" class="weui-btn weui-btn_mini weui-btn_primary">编辑</a>
                        <a href="#" class="weui-btn weui-btn_mini weui-btn_primary">删除</a>
                    </div>
                </div>
            </div>
        </div>
        <nomore></nomore>
    </div>
</template>

<script>
    import good from '../components/good'
    import nomore from '../components/nomore'

    export default {
        name: "mygood",
        components: {good,nomore}
    }
</script>

<style lang="scss" scoped>
    @import "../scss/var";

    .mygood {
        .mygood-img {
            @include img;
            background: {
                position: center;
                size: cover;
                image: url("../../assets/img/img2.jpg");
            }
        }
    }

    .content {
        padding: 12px;
        .title {
            position: absolute;
            top: 12px;
        }
        .money {
            position: absolute;
            bottom: 12px;
        }
        .buttonlist {
            position: absolute;
            right: 12px;
            bottom: 0;
            a:first-child{
                margin-right: 12px;
            }
        }
    }

</style>