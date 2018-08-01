<template>
    <div>
        <search :searchdata="searchdata" :searchspan="searchspan"></search>
    </div>
</template>

<script>
    import search from '../components/search';

    export default {
        components: {search},
        data() {
            return {
                searchdata: "",
                searchspan: ['测试', '挂篮', '电脑']
            }
        }
    }
</script>