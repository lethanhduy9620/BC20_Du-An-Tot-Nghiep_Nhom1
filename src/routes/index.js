import TrangHome from "../containers/UserPages/TrangHome";
import TrangDanhSachPhong from "../containers/UserPages/TrangDanhSachPhong";
import { Route } from "react-router";

const routesHome = [
  {
    exact: true,
    path: "/",
    component: TrangHome,
  },
  {
    exact: true,
    path: "/danh-sach-phong",
    component: TrangDanhSachPhong,
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
