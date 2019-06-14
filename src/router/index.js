import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			redirect: '/dataSe'
		},
		{
			path: '/',
			component: resolve => require(['../components/common/Home.vue'], resolve),
			meta: { title: '自述文件' },
			children:[
				{
					// 系统设置
					path: '/sysMan',
					component: resolve => require(['../components/page/sysMan.vue'], resolve),
					meta: { title: '系统管理', permission: true }
				},
				{
					// 用户管理设置
					path: '/sysUserMan',
					component: resolve => require(['../components/page/sysUserMan.vue'], resolve),
					meta: { title: '用户管理设置', permission: true }
				},
				{
					// 标签设置
					path: '/sysTagsMan',
					component: resolve => require(['../components/page/sysTagsMan.vue'], resolve),
					meta: { title: '标签设置', permission: true }
				},
				{
					// 数据清洗我的工作区
					path: '/dataCleanLIstPanel',
					component: resolve => require(['../components/page/dataCleanLIstPanel.vue'], resolve),
					meta: { title: '数据清洗', permission: true }
				},

				{
					// 数据清洗我的工作区
					path: '/dataCleanList',
					component: resolve => require(['../components/page/dataCleanList.vue'], resolve),
					meta: { title: '数据清洗', permission: true }
				},
				{
					// 数据清洗数据源选择
					path: '/dataCleanCheck',
					component: resolve => require(['../components/page/dataCleanCheck.vue'], resolve),
					meta: { title: '数据清洗数据源选择', permission: true }
				},
				{
					// 数据清洗设置
					path: '/dataCleanSource',
					component: resolve => require(['../components/page/dataCleanSource.vue'], resolve),
					meta: { title: '数据源接入', permission: true }
				},
				{
					// 数据清洗设置B
					path: '/dataCleanSourceB',
					component: resolve => require(['../components/page/dataCleanSourceB.vue'], resolve),
					meta: { title: '数据源配置', permission: true }
				},
				{
					// 数据清洗规则设置
					path: '/dataCleanSet',
					component: resolve => require(['../components/page/dataCleanSet.vue'], resolve),
					meta: { title: '清洗规则设置', permission: true }
				},
				{
					// 数据清洗规则设置
					path: '/dataCleanSetDis',
					component: resolve => require(['../components/page/dataCleanSetDis.vue'], resolve),
					meta: { title: '清洗规则设置', permission: true }
				},
				{
					// 数据清洗规则设置
					path: '/dataCleanCount',
					component: resolve => require(['../components/page/dataCleanCount.vue'], resolve),
					meta: { title: '清洗字段统计', permission: true }
				},
				{
					// 数据清洗结果预览
					path: '/dataCleanPre',
					component: resolve => require(['../components/page/dataCleanPre.vue'], resolve),
					meta: { title: '数据清洗结果预览', permission: true }
				},
				{
					// 数据清洗结果预览
					path: '/dataStandard',
					component: resolve => require(['../components/page/dataStandard.vue'], resolve),
					meta: { title: '标准管理', permission: true }
				},
				{
					// 数据模型详情
					path: '/dataModel',
					component: resolve => require(['../components/page/dataModel.vue'], resolve),
					meta: { title: '数据模型详情', permission: true }
				},
				{
					// 数据模型详情
					path: '/dataModelB',
					component: resolve => require(['../components/page/dataModelB.vue'], resolve),
					meta: { title: '数据模型详情', permission: true }
				},
				{
					// 数据模型详情
					path: '/dataModelC',
					component: resolve => require(['../components/page/dataModelC.vue'], resolve),
					meta: { title: '数据模型详情', permission: true }
				},
				{
					// 数据质量稽核
					path: '/dataAudit',
					component: resolve => require(['../components/page/dataAudit.vue'], resolve),
					meta: { title: '质量稽核', permission: true }
				},
				{
					// 数据质量稽核详情
					path: '/dataAuditView',
					component: resolve => require(['../components/page/dataAuditView.vue'], resolve),
					meta: { title: '质量稽核详情', permission: true }
				},
				{
					// 数据质量稽核详情
					path: '/dataAuditB',
					component: resolve => require(['../components/page/dataAuditB.vue'], resolve),
					meta: { title: '质量稽核详情', permission: true }
				},
				{
					// 数据汇聚列表
					path: '/dataConverge',
					component: resolve => require(['../components/page/dataConverge.vue'], resolve),
					meta: { title: '数据汇聚', permission: true }
				},
				{
					// 数据汇聚展示
					path: '/dataConvergeView',
					component: resolve => require(['../components/page/dataConvergeView.vue'], resolve),
					meta: { title: '数据汇聚任务配置', permission: true }
				},
				{
					// 数据搜索
					path: '/dataSe',
					component: resolve => require(['../components/page/dataSe.vue'], resolve),
					meta: { title: '数据搜索', permission: true }
				},
				{
					// 数据搜索结果
					path: '/dataSeRe',
					component: resolve => require(['../components/page/dataSeRe.vue'], resolve),
					meta: { title: '数据搜索结果', permission: true }
				},
				{
					// 数据萃取
					path: '/dataExtra',
					component: resolve => require(['../components/page/dataExtra.vue'], resolve),
					meta: { title: '数据萃取', permission: true }
				},
				{
					// 数据萃取详情
					path: '/dataExtraView',
					component: resolve => require(['../components/page/dataExtraView.vue'], resolve),
					meta: { title: '数据萃取详情', permission: true }
				},
				{
					// 数据萃取数据详情(音频)
					path: '/dataExtraViewA',
					component: resolve => require(['../components/page/dataExtraViewA.vue'], resolve),
					meta: { title: '数据萃取上传', permission: true }
				},
				{
					// 数据萃取数据详情(其它)
					path: '/dataExtraViewB',
					component: resolve => require(['../components/page/dataExtraViewB.vue'], resolve),
					meta: { title: '数据萃取上传', permission: true }
				},
				{
					// 数据萃取数据详情(文档)
					path: '/dataExtraViewC',
					component: resolve => require(['../components/page/dataExtraViewC.vue'], resolve),
					meta: { title: '数据萃取上传(文档)', permission: true }
				},
				{
					// 数据萃取数据详情(图片)
					path: '/dataExtraViewD',
					component: resolve => require(['../components/page/dataExtraViewD.vue'], resolve),
					meta: { title: '数据萃取上传(图片)', permission: true }
				},
				{
					// 数据萃取(空间上传)
					path: '/dataState',
					component: resolve => require(['../components/page/dataState.vue'], resolve),
					meta: { title: '数据萃取(空间上传)', permission: true }
				},
				{
					// 数据表详情
					path: '/dataStateDetail',
					component: resolve => require(['../components/page/dataStateDetail.vue'], resolve),
					meta: { title: '数据表详情', permission: true }
				},
				{
					// 数据表详情
					path: '/dataStateDetailB',
					component: resolve => require(['../components/page/dataStateDetailB.vue'], resolve),
					meta: { title: '数据表详情', permission: true }
				},
				{
					// 数据表详情(图片)
					path: '/dataPicShow',
					component: resolve => require(['../components/page/dataPicShow.vue'], resolve),
					meta: { title: '图片详情', permission: true }
				},
				{
					// 数据表详情(文档)
					path: '/dataFileShow',
					component: resolve => require(['../components/page/dataFileShow.vue'], resolve),
					meta: { title: '文档详情', permission: true }
				}
			]
		},
		{
			path: '/login',
			component: resolve => require(['../components/page/Login.vue'], resolve),
			meta: { title: '登录'}
		},
		{
			path: '*',
			component: resolve => require(['../components/page/404.vue'], resolve),
			meta: { title: '404'}
		}
	]
})
