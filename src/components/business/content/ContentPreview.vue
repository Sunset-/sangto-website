<template>
    <sunset-view-modal v-ref:modal :options="options">
        <div style="width:100%;height:500px;overflow-y:auto;">
            {{{content}}}
        </div>
    </sunset-view-modal>
</template>
<script>
    export default {
        data() {
            return {
                content: '',
                options: {
                    title: '预览',
                    width: 800,
                    toolbar: false
                }
            }
        },
        methods: {
            preview(content) {
                this.content = content;
                this.$refs.modal.open();
            }
        }
    }
</script>