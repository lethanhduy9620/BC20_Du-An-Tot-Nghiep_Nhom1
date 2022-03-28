import React, { Fragment, useEffect } from "react";
import Navbar from "./_components/Navbar_CTPhong";
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
    dispatch(actFetchRoomReview(ROOM_ID));
  }, []);

  if (loading) return <div>Loading...</div>;
  return (
    <Fragment>
      <header className="container-fluid">
        <Navbar></Navbar>
      </header>

      {/* Body */}
      <RoomDetail></RoomDetail>
    </Fragment>
  );
}
