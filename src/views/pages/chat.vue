<template>
    <div id="chat">
        <good :data="artxq"></good>
        <div class="message weui-cells" v-for="item in data.mess">
            <div class="weui-cell">
                <div class="weui-cell__hd img">
                    <img :src="item.headimgurl" class="avator" alt="">
                </div>
                <div class="weui-cell__hd content">
                    <span class="icon-right">&#9660;</span>
                    {{item.message}}
                </div>
            </div>
        </div>

        <div class="weui-cells bottom">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <textarea class="weui-input" id="content" v-model="content" type="text"/>
                </div>
                <div class="weui-cell__hd">
                    <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary" @click="pushcontent">发送</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {messagechat, messagepush} from "../../service/data";
    import good from '../components/good'

    export default {
        components: {good},
        data() {
            return {
                content: "",
                data: {
                    mess: [],
                },
                artxq: []
            }
        },
        mounted() {
            let hash = location.hash.split("#")

            // setInterval(()=>{
            //     messagechat(hash[2], hash[3])
            //         .then(res => {
            //             this.data = res.data;
            //             console.log(this.data.mess)
            //         })
            // },1000)

            messagechat(hash[2], hash[3])
                .then(res => {
                    this.data = res.data;
                    this.artxq.push(res.data.artxq)
                    console.log(this.data.mess)
                })
        },
        methods: {
            pushcontent() {
                let contentdom = document.getElementById('content')
                let hash = location.hash.split('#');
                messagepush(hash[3], hash[2], contentdom.value)
                contentdom.value = null;

                messagechat(hash[2], hash[3])
                    .then(res => {
                        this.data = res.data;
                        console.log(this.data)
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/var";

    #chat {
        height: 100vh;
        overflow: hidden;
        background-color: $color-grey__bg !important;
        overflow-y: auto;
        margin-bottom: 150px;
        .weui-cell__bd {
            border: 1px solid #666;
            border-radius: 8px;
            margin-right: 20px;
            padding: 0 10px;
            margin-top: 8px;
            margin-bottom: 8px;
            textarea {
                line-height: 1;
                height: 14px;
                font-size: 0.8rem;
            }
        }

        .bottom {
            width: 100vw;
            position: fixed;
            bottom: 0;
        }
    }

    .message {
        background-color: $color-grey__bg !important;

        .weui-cell__hd:last-child {
            background-color: #5771ff;
            color: white;
            border-radius: $boder-radius;
            padding: 6px 12px;
            line-height: 1.55;
            margin-left: 12px;
        }

        .icon-right {
            transform: rotate(90deg);
            -o-transform: rotate(90deg);
            -webkit-transform: rotate(90deg);
            -moz-transform: rotate(90deg);
            display: block;
            position: absolute;
            color: #5771ff;
            margin-left: -25px;
            top: 16px;
        }

        .img {
            width: 50px;
            .avator {
                @include img-avator
                position: absolute;
                top: 8px;
            }
        }
        .content {
            width: -moz-max-content;
            max-width: 60%;
            word-wrap: break-word;
            color: white;
        }

        .message-me {
            background: #ff6666 !important;
            .icon-right {
                color: #ff6666;
            }

        }
    }
</style>