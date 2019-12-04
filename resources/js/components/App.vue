<template>
    <div>
        <h1>Example Component</h1>
        <h3>I'm an example component.</h3>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log("Component mounted.");
    }
};
</script>

<style lang="scss">
@import "../../sass/app.scss";
</style>
