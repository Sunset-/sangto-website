<template>
    <sunset-layout title="新闻管理">
        <sunset-crud :options="options"></sunset-crud>
    </sunset-layout>
</template>
<script>
    import Store from './store.js';

    const CONTENT_TYPE_NEWS = '1';
    const CONTENT_STATUS_NORMAL = '1';
    const CONTENT_STATUS_HIDE = '2';

    export default {
        methods: {

        },
        data() {
            return {
                options: {
                    title: '新闻',
                    store: Store,
                    //表格
                    tableOptions: {
                        columns: [{
                            title: '封面',
                            name: 'cover'
                        }, {
                            title: '标题',
                            name: 'title'
                        }, {
                            title: '摘要',
                            name: 'digest'
                        }, {
                            title: '发布人',
                            style: 'width:120px;text-align:center;',
                            name: 'publishUser'
                        }, {
                            title: '状态',
                            style: 'width:120px;text-align:center;',
                            name: 'status',
                            format(v){
                                var Dictionary = Sunset.Service.Dictionary;
                                return `<span style="color:${v==Dictionary.alias('CONTENT_STATUS','NORMAL')?'#09c':'#F00'};">${Dictionary.transcode('CONTENT_STATUS',v)}</span>`
                            }
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
                            permission: 'SYSTEM_MANAGER_DICTIONARY_ADD',
                            signal: 'ADD',
                            permission: 'SystemVariable_ADD'
                        }],
                        //表格搜索
                        filter: false,
                        //数据条目操作
                        recordTools: [{
                            label: '修改',
                            icon: 'edit',
                            color: 'warning',
                            permission: 'SYSTEM_MANAGER_DICTIONARY_UPDATE',
                            signal: 'MODIFY',
                            permission: 'SystemVariable_MODIFY'
                        }, {
                            label: '删除',
                            icon: 'trash-a',
                            color: 'error',
                            permission: 'SYSTEM_MANAGER_DICTIONARY_DELETE',
                            signal: 'DELETE',
                            permission: 'SystemVariable_DELETE'
                        }],
                        datasource: (filter) => {
                            filter.type = CONTENT_TYPE_NEWS;
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
                            label: '所属分类',
                            name: 'category',
                            widget: 'input',
                            validate: {
                                required: true,
                                maxlength: 32
                            }
                        }, {
                            label: '封面图片',
                            name: 'cover',
                            widget: 'file',
                            url: '/service/system/file/upload',
                            format: (a) => {
                                return JSON.parse(a).data;
                            },
                            thumbnail: function (a, b, c) {
                                if (a) {
                                    return a;
                                }
                            },
                            newline: true,
                            validate: {
                                required: true
                            }
                        }, {
                            label: '关键字',
                            name: 'keywords',
                            widget: 'input',
                            monopolize: true,
                            validate: {
                                maxlength: 64
                            }
                        }, {
                            label: '摘要',
                            name: 'digest',
                            widget: 'textarea',
                            monopolize: true,
                            validate: {
                                maxlength: 256
                            }
                        }, {
                            label: '内容',
                            name: 'content',
                            widget: 'editor',
                            monopolize: true,
                            validate: {
                                required: true
                            }
                        }, {
                            label: '发布者',
                            name: 'publishUser',
                            widget: 'input',
                            validate: {
                                required: true,
                                maxlength: 32
                            }
                        }],
                        format: (model) => {
                            model.type = CONTENT_TYPE_NEWS;
                            model.status = model.status || CONTENT_STATUS_NORMAL;
                            return model;
                        },
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