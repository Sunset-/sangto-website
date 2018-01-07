<template>
    <sunset-layout title="招聘信息">
        <sunset-crud v-ref:crud :options="options"></sunset-crud>
    </sunset-layout>
</template>
<script>
    import Store from './store.js';

    export default {
        methods: {

        },
        data() {
            return {
                options: {
                    title: '招聘信息',
                    store: Store,
                    //表格
                    tableOptions: {
                        columns: [{
                            title: '标题',
                            name: 'title'
                        }, {
                            title: '职位要求',
                            name: 'positionRequirement'
                        }, {
                            title: '岗位职责',
                            name: 'responsibility'
                        }, {
                            title: '更新人',
                            style: 'width:120px;text-align:center;',
                            name: 'createUserName'
                        }, {
                            title: '更新时间',
                            name: 'createTime',
                            style: 'width:160px;text-align:center;',
                            format: 'DATETIME'
                        }],
                        showIndex: true,
                        pageSize: 10,
                        localPage: false,
                        multiCheck: false,
                        sortable: true,
                        lazy: false,
                        format: {
                            list: 'rows',
                            count: 'count',
                            pageSize: 'pageSize',
                            currentPage: 'pageNumber'
                        },
                        //表格工具栏
                        toolbar: [{
                            label: '新增',
                            icon: 'plus-round',
                            color: 'success',
                            signal: 'ADD',
                            permission: 'Recruit_ADD'
                        }],
                        //表格搜索
                        filter: {
                            align: 'right',
                            fields: [{
                                name: 'keyword',
                                placeholder: '标题/关键字',
                                widget: 'search'
                            }]
                        },
                        //数据条目操作
                        recordTools: [ {
                            label: '修改',
                            icon: 'edit',
                            color: 'warning',
                            operate: (record) => {
                                Store.getById(record.id).then(res => {
                                    this.$refs.crud.operateSignal('MODIFY', res);
                                });
                            },
                            permission: 'Recruit_MODIFY'
                        }, {
                            label: '删除',
                            icon: 'trash-a',
                            color: 'error',
                            signal: 'DELETE',
                            permission: 'Recruit_DELETE'
                        }],
                        datasource: (filter) => {
                            return Store.list(filter);
                        }
                    },
                    //表格表单
                    formOptions: {
                        cols: 3,
                        store: Store,
                        fields: [{
                            label: '标题',
                            name: 'title',
                            widget: 'input',
                            validate: {
                                required: true,
                                maxlength: 32
                            }
                        }, {
                            label: '职位要求',
                            name: 'positionRequirement',
                            widget: 'editor',
                            monopolize: true,
                            toolbar: [
                                'fullscreen', 'undo', 'redo', '|',
                                'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript',
                                'subscript', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote',
                                'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist',
                                'insertunorderedlist', 'selectall', 'cleardoc', '|',
                                'rowspacingtop', 'rowspacingbottom', 'lineheight', '|',
                                'customstyle', 'paragraph', 'fontfamily', 'fontsize', '|',
                                'directionalityltr', 'directionalityrtl', 'indent', '|',
                                'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|',
                                'touppercase', 'tolowercase', '|',
                                'link', 'unlink', 'anchor', '|', 'imagenone', 'imageleft', 'imageright',
                                'imagecenter', '|',
                                'simpleupload', 'insertimage', 'emotion', 'scrawl', '|',
                                'imagenone', 'imageleft', 'imageright', 'imagecenter', '|',
                                'horizontal', 'date', 'time', 'spechars', '|',
                                'inserttable', 'deletetable', 'insertparagraphbeforetable', 'insertrow',
                                'deleterow', 'insertcol', 'deletecol', 'mergecells', 'mergeright',
                                'mergedown', 'splittocells', 'splittorows', 'splittocols', 'charts', '|',
                                'preview', 'searchreplace'
                            ].join(','),
                            editorOptions: {
                                initialFrameHeight: 300
                            },
                            validate: {
                                required: true
                            }
                        }, {
                            label: '岗位职责',
                            name: 'responsibility',
                            widget: 'editor',
                            monopolize: true,
                            toolbar: [
                                'fullscreen', 'undo', 'redo', '|',
                                'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript',
                                'subscript', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote',
                                'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist',
                                'insertunorderedlist', 'selectall', 'cleardoc', '|',
                                'rowspacingtop', 'rowspacingbottom', 'lineheight', '|',
                                'customstyle', 'paragraph', 'fontfamily', 'fontsize', '|',
                                'directionalityltr', 'directionalityrtl', 'indent', '|',
                                'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|',
                                'touppercase', 'tolowercase', '|',
                                'link', 'unlink', 'anchor', '|', 'imagenone', 'imageleft', 'imageright',
                                'imagecenter', '|',
                                'simpleupload', 'insertimage', 'emotion', 'scrawl', '|',
                                'imagenone', 'imageleft', 'imageright', 'imagecenter', '|',
                                'horizontal', 'date', 'time', 'spechars', '|',
                                'inserttable', 'deletetable', 'insertparagraphbeforetable', 'insertrow',
                                'deleterow', 'insertcol', 'deletecol', 'mergecells', 'mergeright',
                                'mergedown', 'splittocells', 'splittorows', 'splittocols', 'charts', '|',
                                'preview', 'searchreplace'
                            ].join(','),
                            editorOptions: {
                                initialFrameHeight: 300
                            },
                            validate: {
                                required: true
                            }
                        }],
                        validate: (model) => {
                            return true;
                        },
                        tools: null
                    }
                }
            }
        }
    };
</script>