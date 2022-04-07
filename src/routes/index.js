import { lazy } from "react";
import { Route } from "react-router";

const routesHome = [
  // Trang Home
  {
    exact: true,
    path: "/",
    component: lazy(() => import("../containers/UserPages/TrangHome")),
  },

  // Trang Danh Sach Phong
  {
    exact: false,
    path: "/danh-sach-phong/:locationID",
    component: lazy(() => import("../containers/UserPages/TrangDanhSachPhong")),
  },

  // Trang Chi tiet phong
  {
    exact: false,
    path: "/chi-tiet-phong/:id",
    component: lazy(() => import("../containers/UserPages/TrangChiTietPhong")),
  },

  // Trang Dat phong
  {
    exact: false,
    path: "/dat-phong",
    component: lazy(() => import("../containers/UserPages/TrangDatPhong")),
  },

  // Trang Dat phong thanh cong
  {
    exact: true,
    path: "/dat-phong-thanh-cong",
    component: lazy(() =>
      import("../containers/UserPages/TrangDatPhongThanhCong")
    ),
  },
];

const renderRoutesHome = () => {
  return routesHome.map((route, index) => {
    return (
      <Route
        key={index}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    );
  });
};

export { renderRoutesHome };
