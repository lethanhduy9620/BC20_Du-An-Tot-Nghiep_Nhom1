import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { actFetchRoomDetail } from "../TrangChiTietPhong/modules/actions";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./../TrangDanhSachPhong/_components/Navbar_DSPhong";
import BookingInfo from "./_components/BookingInfo";
import "./style_trangdatphong.css";
import Loader from "./../components/Loader/Loader";

export default function TrangDatPhong() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.roomDetailReducer.loading);

  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  let query = useQuery();

  useEffect(() => {
    dispatch(actFetchRoomDetail(query.get("roomId")));
  }, []);

  if (loading) return <Loader />;
  return (
    <div id="roomBookingPage">
      <Navbar />
      <BookingInfo />
    </div>
  );
}
