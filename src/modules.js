//系统管理
import Account from './components/system/account/Account.vue';
import SystemVariable from './components/system/systemVariable/SystemVariable.vue';
import Menu from './components/system/menu/Menu.vue';
import Permission from './components/system/permission/Permission.vue';
import Dictionary from './components/system/dictionary/Dictionary.vue';

// 应用系统
import CustomForm from 'business/customForm/CustomForm';

//业务
//新闻
import News from './components/business/content/news/index';

let permissions = {
    VIEW: '查看',
    ADD: '新增',
    MODIFY: '修改',
    DELETE: '删除',
    SWITCH: '开关',
    RESET_PASSWORD: '重置密码',
    ENUM_UPDATE: '枚举修改',
    ENUM_DELETE: '枚举删除',
    ENUM_ORDER: '枚举排序',
    ROLE: '分配角色',
    ENUM: '枚举管理',
    MOUNT_MENU: '挂载菜单',
    AUTHORIZATION: '授权',
    ADDREL: '添加关联关系',
    DELETEREL: '删除关联关系',
    REL_CUSTOMER: '关联站点',
    VIEW_MESSAGE: '查看消息'
};

let modules = [
    //系统模块
    {
        group: '系统模块',
        name: 'Account',
        title: '管理账户',
        permission: ['ADD', 'MODIFY', 'DELETE', 'RESET_PASSWORD', 'ROLE'],
        component: Account
    }, {
        group: '系统模块',
        name: 'Dictionary',
        title: '字典管理',
        permission: ['ADD', 'MODIFY', 'DELETE', 'ENUM', 'ENUM_UPDATE', 'ENUM_DELETE', 'ENUM_ORDER'],
        component: Dictionary
    }, {
        group: '系统模块',
        name: 'SystemVariable',
        title: '系统变量',
        permission: ['ADD', 'MODIFY', 'DELETE'],
        component: SystemVariable
    }, {
        group: '系统模块',
        name: 'Menu',
        title: '菜单配置',
        permission: ['ADD', 'MODIFY', 'DELETE', 'MOUNT_MENU'],
        component: Menu
    }, {
        group: '系统模块',
        name: 'Permission',
        title: '权限管理',
        permission: ['ADD', 'MODIFY', 'DELETE', 'AUTHORIZATION'],
        component: Permission
    },
    //应用系统
    {
        group: '应用系统',
        color: 'info',
        name: 'News',
        title: '新闻管理',
        permission: ['ADD', 'MODIFY', 'DELETE'],
        component: News
    }
];

var moduleComponent = {};
modules.forEach(m => {
    moduleComponent[m.name] = m.component;
});

module.exports = {
    moduleComponent: moduleComponent,
    modules: modules,
    permissions: permissions
};