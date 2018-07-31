<template>
    <div>
        <div id="avator" class="weui-flex">
            <div class="weui-flex__item">
                <img :src="user.headimgurl" alt="">
                <p class="avator-name">{{user.nickname}}</p>
            </div>
        </div>
        <div class="weui-cells">
            <router-link to="/mygood" class="weui-cell weui-cell_select">
                <div class="weui-cell__bd">
                    <input class="weui-select" value="我的发布" disabled></input>
                </div>
                <div class="weui-cell__hd icon">
                    {{mypush}}
                </div>
            </router-link>
            <router-link to="/collect">
                <div class="weui-cell weui-cell_select">
                    <div class="weui-cell__bd">
                        <input class="weui-select" value="我的收藏" disabled></input>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    import {personcenter, mypush} from '../../service/data'

    export default {
        name: "me",
        data() {
            return {
                user: "",
                mypush: ''
            }
        },
        created() {
            personcenter().then(res => this.user = res.data.users)
            mypush().then(res => this.mypush = res.data.list.length)
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/var";

    #avator {
        height: 30vh;
        width: 100vw;
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        background: -webkit-linear-gradient(270deg, #f6d365 0%, #eb937a 100%);
        img {
            height: 55px;
            width: 55px;
            border-radius: 50%;
        }
        .avator-name {
            color: white;
            font-size: $font-size;
        }
    }

    .icon {
        float: right;
        width: 20px;
        height: 20px;
        line-height: 20px;
        padding: 2px;
        text-align: center;
        border-radius: 10%;
        margin-right: 30px;
        background: red;
        color: white;
    }
</style>