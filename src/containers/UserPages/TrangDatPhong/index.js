import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { actFetchRoomDetail } from "../TrangChiTietPhong/modules/actions";
import { useDispatch } from "react-redux";
import Navbar from "./../TrangDanhSachPhong/_components/Navbar_DSPhong";
import BookingInfo from "./_components/BookingInfo";
import "./style_trangdatphong.css";

export default function TrangDatPhong() {
  const dispatch = useDispatch();

  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  let query = useQuery();

  useEffect(() => {
    dispatch(actFetchRoomDetail(query.get("roomId")));
  }, []);

  return (
    <div id="roomBooking">
      <Navbar />
      <BookingInfo />
    </div>
  );
}
