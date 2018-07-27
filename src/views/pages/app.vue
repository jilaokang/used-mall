<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    import nomore from '../components/nomore'

    export default {
        name: "app",
        components: {nomore}
    }
</script>

<style scoped>

</style>