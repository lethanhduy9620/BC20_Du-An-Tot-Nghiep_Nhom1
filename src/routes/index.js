import TrangHome from "../containers/UserPages/TrangHome";
import TrangDanhSachPhong from "../containers/UserPages/TrangDanhSachPhong";
import TrangChiTietPhong from "../containers/UserPages/TrangChiTietPhong";
import Login from "../containers/UserPages/TrangHome/Login";
import TrangDatPhong from "../containers/UserPages/TrangDatPhong";
import { Route } from "react-router";
import TrangDatPhongThanhCong from "../containers/UserPages/TrangDatPhong/DatPhongThanhCong";
import TrangDatPhongLoi from "../containers/UserPages/TrangDatPhong/DatPhongLoi";

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
    exact: false,
    path: "/login",
    component: Login,
  },
  {
    exact: false,
    path: "/dat-phong",
    component: TrangDatPhong,
  },
  {
    exact: true,
    path: "/dat-phong-thanh-cong",
    component: TrangDatPhongThanhCong,
  },
  {
    exact: true,
    path: "/dat-phong-loi",
    component: TrangDatPhongLoi,
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
      ></Route>
    );
  });
};

export { renderRoutesHome };
