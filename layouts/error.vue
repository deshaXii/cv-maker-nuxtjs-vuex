<template>
    <div class="error-page">
        <a class="back-link" @click="$router.go(-1)" ><i class="fa fa-arrow-left"></i></a>
    <a class="forward-link" @click="$router.go(1)" ><i class="fa fa-arrow-right"></i></a>
        <div class="code-area">
            <span style="color: #777;font-style:italic;">
                // 404 page not found.
            </span>
            <span>
                <span style="color:#d65562;">if</span>
                (
                <span style="color:#4ca8ef;">!</span><span style="font-style: italic;color:#bdbdbd;">found</span>)
                {
            </span>
            <span>
                <span style="padding-left: 15px;color:#2796ec">
                <i style="width: 10px;display:inline-block"></i>throw
                </span>
                <span>
                (<span style="color: #a6a61f">404 Error"</span>);
                </span>
                <span style="display:block">}</span>
                <span style="color: #777;font-style:italic;">
                // <nuxt-link to="/">Go home!</nuxt-link>
                </span>
            </span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>