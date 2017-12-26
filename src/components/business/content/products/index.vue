<template>
    <sunset-layout title="产品与方案">
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
                options: CrudOptionsFactory.call(this, '产品与方案', 'Products', Sunset.Service.Dictionary.alias(
                    'CONTENT_TYPE',
                    'PRODUCT_AND_PLAN'), 'PRODUCTS_CATEGORY')
            }
        }
    };
</script>