const routerOfRole = {
  coustomer: [{
    name: 'Product',
  }, {
    name: 'ProductList',
  }, {
    name: 'ProductAdd',
  }],
  admin: [{
    name: 'Product',
  }, {
    name: 'ProductList',
  }, {
    name: 'ProductAdd',
  }, {
    name: 'DiyList',
  }],
};

/**
 *
 * @param {*} role
 * @param {*} routes
 * @returns
 * 筛选根据不同角色匹配的路由
 */
export default function getMatchOfRoutes(role, routes) {
  const routesName = routerOfRole[role].map((it) => it.name);
  const resultRoutes = routes.filter((r) => {
    const item = r;
    if (routesName.indexOf(item.name) !== -1) {
      const { children } = item;
      item.children = children.filter((c) => routesName.indexOf(c.name) !== -1);
      return true;
    }
    return false;
  });
  return resultRoutes;
}
