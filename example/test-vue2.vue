<script>
export default {
    data() {
        return {
            name: 'Hello World'
        }
    },
    created() {
        this.getName()
    },
    methods: {
        getName() {
            return this.name
        }
    }
}
</script>

<template>
    <div class="content">{{ name }}</div>
</template>

<style scoped lang="scss">
.content {
    background-color: pink;
}
</style>
