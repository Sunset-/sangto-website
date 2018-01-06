<template>
    <sunset-layout title="合作伙伴">
        <sunset-crud v-ref:crud :options="options"></sunset-crud>
        <content-preview v-ref:previewer></content-preview>
    </sunset-layout>
</template>
<script>
    import Store from '../store.js';
    import CrudOptionsFactory from '../CrudOptionsFactory';

    export default {
        methods: {

        },
        data() {
            return {
                options: (() => {
                    var options = CrudOptionsFactory.call(this, '合作伙伴', 'Partner', Sunset.Service.Dictionary.alias(
                        'CERTIFICATE_TYPE',
                        'PARTNER_LOGO'));
                    return options;
                })()
            }
        }
    };
</script>