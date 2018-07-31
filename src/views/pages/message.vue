<template>
    <div>
        <message :data="messageList"></message>
        <nomore></nomore>
    </div>
</template>

<script>
    import message from '../components/message'
    import nomore from '../components/nomore'

    import {messagelist} from '../../service/data'

    export default {
        components: {message, nomore},
        data() {
            return {
                messageList: {}
            }
        },
        created() {
            messagelist('6C283EC8738F4CA70E64FFC46DFAF51E').then(res => {

                let arr=[]

                this.messageList = res.data;
                console.log(this.messageList)
            })
        }
    }
</script>