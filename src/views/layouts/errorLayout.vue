<template>
    <div class="errorLayout">
        <slot/>
    </div>
</template>

<script>
export default {
 name: 'errorLayout'
}
</script>

<style scoped lang="scss">
    .errorLayout{
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>
