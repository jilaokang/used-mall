<template>
    <div>
        <search :searchdata="searchdata" :searchspan="searchspan"></search>
    </div>
</template>

<script>
    import search from '../components/search';
    import {Search} from "../../service/data";

    export default {
        components: {search},
        data() {
            return {
                searchdata: "",
                searchspan: ['测试', '挂篮', '电脑']
            }
        },
        created() {
            Search('测').then(
                res => {
                    this.searchdata = res.data.data;
                }
            )
        }
    }
</script>