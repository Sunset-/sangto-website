import Store from './store.js';

module.exports = function (title, moduleName, contentType, categoryName, format) {
    var options = {
        title: title,
        store: Store,
        //表格
        tableOptions: {
            columns: [ {
                title: '标题',
                name: 'title'
            },{
                title: '封面',
                name: 'cover',
                format(v) {
                    return `<img style="width:100px;" src="/upload/${v}" />`;
                }
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
                permission: moduleName + '_ADD'
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
                permission: moduleName + '_MODIFY'
            }, {
                label: '删除',
                icon: 'trash-a',
                color: 'error',
                signal: 'DELETE',
                permission: moduleName + '_DELETE'
            }],
            datasource: (filter) => {
                filter.type = contentType;
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
                label: '封面图片',
                name: 'cover',
                widget: 'file',
                max :1,
                url: '/service/system/file/upload',
                format: (a) => {
                    return JSON.parse(a).data;
                },
                thumbnail: function (v) {
                    if (v) {
                        return `/upload/${v}`;
                    }
                },
                newline: true
            },],
            cast:(model)=>{
                model.status += '';
            },
            format: (model) => {
                model.type = contentType;
                model.status = model.status || Sunset.Service.Dictionary.alias('CERTIFICATE_STATUS', 'NORMAL');
                return model;
            },
            validate: (model) => {
                return true;
            },
            tools: null
        }
    };
    format && format(options);
    return options;
}