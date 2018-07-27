<template>
    <div id="footer">
        <div class="weui-cells">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    苹果X 128G原装正品，买来玩王者荣耀的
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd money">￥50.0</div>
                <div class="weui-cell_hd look">浏览：<span>24</span></div>
            </div>
        </div>
        <div class="weui-cells__title">商品详情</div>
        <div class="weui-cells content">
            <div class="weui-cell">
                好手机啊，一个月前在JD上买的，发票票据都在，九成新以上，无磕碰无划痕，别人都说是世界上最强的手机，可我还是喜欢小灵通。
            </div>
            <div class="imgcontent weui-cell">
                <img src="../../assets/img/img2.jpg" alt="">
            </div>
            <div class="imgcontent weui-cell">
                <img src="../../assets/img/img2.jpg" alt="">
            </div>
            <div class="imgcontent weui-cell">
                <img src="../../assets/img/img2.jpg" alt="">
            </div>
            <div class="imgcontent weui-cell">
                <img src="../../assets/img/img2.jpg" alt="">
            </div>
        </div>

        <div class="weui-cells footer">
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <span class="iconfont icon-person"></span>
                    <p>卖家</p>
                </div>
                <div class="weui-cell__hd">
                    <span class="iconfont icon-person"></span>
                    <p>收藏</p>
                </div>
                <div class="weui-cell__bd"><a href="javascript:;" class="weui-btn weui-btn_primary">聊一聊</a></div>
            </div>
        </div>
        <nomore></nomore>
    </div>
</template>

<script>
    import nomore from '../components/nomore'
    export default {
        components:{nomore}
    }
</script>

<style lang="scss" scoped>
    @import "../scss/var";
    #footer{
        margin-bottom: 166px;
    }
    .imgcontent {
        img {
            border-radius: $boder-radius;
        }
    }

    .weui-cell {
        &:after {
            content: none;
        }
        &:before {
            content: none;
        }
    }

    .content {
        padding-bottom: 40px;
        line-height: 1.55;
    }

    .footer {
        bottom: 0;
        width: 100%;
        position: fixed;
        text-align: center;
        .weui-cell__hd {
            line-height: $line-height;
            padding: 0 $padding;
            .iconfont {
                font-size: $font-size-icon;
            }
            p {
                font-size: $font-size-sm;
            }
        }
        .weui-cell__bd {
            text-align: right;
            a {
                width: 80%;
                margin-right: 0;
            }
        }
    }

    .look {
        font-size: $font-size-sm;
        color: $color-grey__deep;
    }
</style>