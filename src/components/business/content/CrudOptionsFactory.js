import Store from './store.js';

module.exports = function (title, moduleName, contentType, categoryName, format) {
    var options = {
        title: title,
        store: Store,
        //表格
        tableOptions: {
            columns: [{
                title: '图标',
                name: 'icon',
                style: 'width:70px;text-align:center;',
                format(v) {
                    return `<img style="width:50px;" src="/upload/${v}" />`;
                }
            },{
                title: '封面',
                name: 'cover',
                style: 'width:120px;text-align:center;',
                format(v) {
                    return `<img style="width:100px;" src="/upload/${v}" />`;
                }
            }, {
                title: '标题',
                name: 'title'
            }, {
                title: '类型',
                name: 'category',
                enum: categoryName
            }, {
                title: '发布人',
                style: 'width:120px;text-align:center;',
                name: 'publishUser'
            }, {
                title: '状态',
                style: 'width:120px;text-align:center;',
                name: 'status',
                format(v) {
                    var Dictionary = Sunset.Service.Dictionary;
                    return `<span style="color:${{
                        '1' : '#09c',
                        '2' : '#33d685',
                        '3' : '#F00'
                    }[v]}">${Dictionary.transcode('CONTENT_STATUS',v)}</span>`
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
            recordTools: [{
                label: '预览',
                icon: 'eye',
                color: 'info',
                operate: (record) => {
                    Store.getById(record.id).then(res => {
                        this.$refs.previewer.preview(res.content);
                    });
                }
            }, {
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
                label: '所属分类',
                name: 'category',
                widget: 'select',
                enum: categoryName,
                validate: {
                    required: true,
                    maxlength: 32
                }
            },  {
                label: '状态',
                name: 'status',
                widget: 'select',
                enum: 'CONTENT_STATUS',
                validate: {
                    required: true
                }
            }, {
                label: '图标',
                name: 'icon',
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
                toolbar: [
                    'fullscreen', 'undo', 'redo', '|',
                    'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript', 'subscript', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc', '|',
                    'rowspacingtop', 'rowspacingbottom', 'lineheight', '|',
                    'customstyle', 'paragraph', 'fontfamily', 'fontsize', '|',
                    'directionalityltr', 'directionalityrtl', 'indent', '|',
                    'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|', 'touppercase', 'tolowercase', '|',
                    'link', 'unlink', 'anchor', '|', 'imagenone', 'imageleft', 'imageright', 'imagecenter', '|',
                    'simpleupload', 'insertimage', 'emotion', 'scrawl', '|',
                    'imagenone', 'imageleft', 'imageright', 'imagecenter', '|',
                    'horizontal', 'date', 'time', 'spechars', '|',
                    'inserttable', 'deletetable', 'insertparagraphbeforetable', 'insertrow', 'deleterow', 'insertcol', 'deletecol', 'mergecells', 'mergeright', 'mergedown', 'splittocells', 'splittorows', 'splittocols', 'charts', '|',
                    'preview', 'searchreplace'
                ].join(','),
                editorOptions: {
                    initialFrameHeight: 300
                },
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
            cast:(model)=>{
                model.category += '';
                model.status += '';
            },
            format: (model) => {
                model.type = contentType;
                model.status = model.status || Sunset.Service.Dictionary.alias('CONTENT_STATUS', 'NORMAL');
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