import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const DASHBOARD: AppRouteRecordRaw = {
  path: '/dashboard',
  name: 'dashboard',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.dashboard',
    requiresAuth: true,
    icon: 'icon-dashboard',
    order: 0,
  },
  children: [
    {
      path: 'workplace',
      name: 'Workplace',
      component: () => import('@/views/dashboard/workplace/index.vue'),
      meta: {
        locale: 'menu.dashboard.workplace',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    // TODO dash boards.
    {
      path: 'graphEditor',
      name: 'graphEditor',
      component: () => import('@/views/dashboard/graphEditor/index.vue'),
      meta: {
        locale: 'menu.dashboard.graphEditor',
        requiresAuth: true,
        roles: ['*'],
      },
    }
  ],
};

export default DASHBOARD;
