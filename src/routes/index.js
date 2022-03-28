import TrangHome from "../containers/UserPages/TrangHome";
import TrangDanhSachPhong from "../containers/UserPages/TrangDanhSachPhong";
import TrangChiTietPhong from "../containers/UserPages/TrangChiTietPhong";
import Login from "../containers/UserPages/TrangHome/Login";
import { Route } from "react-router";

const routesHome = [
  {
    exact: true,
    path: "/",
    component: TrangHome,
  },
  {
    exact: false,
    path: "/danh-sach-phong/:locationID",
    component: TrangDanhSachPhong,
  },
  {
    exact: false,
    path: "/chi-tiet-phong/:id",
    component: TrangChiTietPhong,
  },
  {
    exact:false,
    path:"/login",
    component: Login,
  }
];

const renderRoutesHome = () => {
  return routesHome.map((route, index) => {
    return (
      <Route
        key={index}
        exact={route.exact}
        path={route.path}
        component={route.component}
      ></Route>
    );
  });
};

export { renderRoutesHome };
