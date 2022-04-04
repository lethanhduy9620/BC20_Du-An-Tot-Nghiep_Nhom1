import React, { Fragment, useEffect } from "react";
import Navbar from "./../TrangDanhSachPhong/_components/Navbar_DSPhong";
import RoomDetail from "./_components/RoomDetail";
import "./style_ChiTietPhong.css";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { actFetchRoomDetail } from "./modules/actions";
import { actFetchRoomReview } from "./_components/RoomReview/modules/actions";

export default function TrangChiTietPhong() {
  const dispatch = useDispatch();
  const { id: ROOM_ID } = useParams();
  const loading = useSelector((state) => state.roomDetailReducer.loading);

  useEffect(() => {
    dispatch(actFetchRoomDetail(ROOM_ID));
    dispatch(actFetchRoomReview(ROOM_ID));
  }, []);

  if (loading) return <div>Loading...</div>;
  return (
    <section id="roomDetailPage">
      <header>
        <Navbar />
      </header>

      {/* Body */}
      <RoomDetail />
    </section>
  );
}
