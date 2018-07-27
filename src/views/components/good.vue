<template>
    <div>
        <div class="weui-cells good">
            <router-link to="/detail">
                <div class="weui-cell">
                    <div class="weui-cell__hd good__img">
                    </div>
                    <div class="weui-cell__bd good—list">
                        <div class="good-list__title">
                            苹果X，便宜大甩卖啦苹果X
                        </div>
                        <div class="good-list ">
                            <p style="float: left">￥50.0</p>
                            <p style="float: right">3C产品</p>
                        </div>
                    </div>
                </div>
            </router-link>
            <div class="weui-cell">
                <div class="weui-cell__hd good__img">
                </div>
                <div class="weui-cell__bd good—list">
                    <div class="good-list__title">
                        苹果X，便宜大甩卖啦苹果X
                    </div>
                    <div class="good-list ">
                        <p style="float: left">￥50.0</p>
                        <p style="float: right">3C产品</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
    @import "../scss/var";

    .good {
        .good__img {
            @include img;
            background: {
                image: url("../../assets/img/6E6F1DB90378F60CFAE0F9DE2C00B79B.jpg");
                position: center;
                repeat: no-repeat;
                size: cover;
            }
        }
    }

    .good—list {
        height: 4.75rem;
        padding-left: $font-size-sm;
        .good-list__title {
            font-size: $font-size;
            height: 3rem;
            color: #555;
        }
        .good-list {
            p:first-child {
                color: $color-orange;
            }
            p:last-child {
                color: $color-grey__deep;
                font-size: $font-size-sm;
            }
        }
    }
</style>