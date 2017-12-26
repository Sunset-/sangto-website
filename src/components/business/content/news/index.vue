<template>
    <sunset-layout title="新闻管理">
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
                options: CrudOptionsFactory.call(this, '新闻', 'News', Sunset.Service.Dictionary.alias('CONTENT_TYPE',
                        'NEWS'),
                    'NEWS_CATEGORY')
            }
        }
    };
</script>