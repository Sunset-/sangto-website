<template>
    <sunset-layout title="经典案例">
        <sunset-crud v-ref:crud :options="options"></sunset-crud>
        <content-preview v-ref:previewer></content-preview>
    </sunset-layout>
</template>
<script>
    import Store from '../store.js';
    import CrudOptionsFactory from '../CrudOptionsFactory';
    import ContentPreview from '../ContentPreview.vue';

    export default {
        components: {
            ContentPreview
        },
        methods: {

        },
        data() {
            return {
                options: CrudOptionsFactory('Case', Sunset.Service.Dictionary.alias('CONTENT_TYPE', 'SUCCESSFUL_CASE'))
            }
        }
    };
</script>