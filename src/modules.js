//系统管理
import Account from './components/system/account/Account.vue';
import SystemVariable from './components/system/systemVariable/SystemVariable.vue';
import Menu from './components/system/menu/Menu.vue';
import Permission from './components/system/permission/Permission.vue';
import Dictionary from './components/system/dictionary/Dictionary.vue';

// 应用系统
import ApplicationSystem from 'business/applicationSystem/ApplicationSystem';
import FunctionCard from 'business/functionCard/FunctionCard';
import CustomForm from 'business/customForm/CustomForm';
import Collector from './components/business/collector/Collector.vue';

//新闻
import News from './components/business/news/index';

//业务
// import Doctor from './components/business/doctor/Doctor.vue';
// import Hospital from './components/business/hospital/Hospital.vue';
// import Team from './components/business/team/Team.vue';
// import Customer from './components/business/customer/Customer.vue';
// import Template from './components/business/template/Template.vue';

// import Reporting from './components/business/reportCenter/Reporting.vue';
// import Reported from './components/business/reportCenter/Reported.vue';

// import DicomImage from './components/business/dicomImage/DicomImage.vue';
// import Dailycase from './components/business/dailycase/Dailycase.vue';

// import PlatformStatistics from './components/business/reportStatistics/PlatformStatistics.vue';
// import TeamStatistics from './components/business/reportStatistics/TeamStatistics.vue';
// import CustomerStatistics from './components/business/reportStatistics/CustomerStatistics.vue';

// import RelCustomer from './components/business/relCustomer/RelCustomer.vue';
// import TeamStatement from './components/business/statement/TeamStatement';

// import ConsultExpert from './components/business/consultExpert/ConsultExpert.vue';
// import ConsultProcess from './components/business/consultProcess/ConsultProcess.vue';

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
    },
    {
        group: '应用系统',
        color: 'info',
        name: 'ApplicationSystem',
        title: '应用系统',
        permission: ['ADD', 'MODIFY', 'DELETE'],
        component: ApplicationSystem
    }, {
        group: '应用系统',
        color: 'info',
        name: 'FunctionCard',
        title: '功能卡片',
        permission: ['ADD', 'MODIFY', 'DELETE'],
        component: FunctionCard
    }, {
        group: '应用系统',
        color: 'info',
        name: 'CustomForm',
        title: '自定义表单',
        permission: ['ADD', 'MODIFY', 'DELETE'],
        component: CustomForm
    }, {
        group: '应用系统',
        color: 'info',
        name: 'Collector',
        title: '采集器',
        permission: ['ADD', 'MODIFY', 'DELETE'],
        component: Collector
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