import React, { Fragment, useEffect, useState } from "react";
import Navbar from "./_components/Navbar";
import Filters from "./_components/Filters";
import "./style_danhsachphong.css";
import RoomList from "./_components/RoomList";
import { actFetchRoomList } from "./modules/actions";
import { useDispatch, useSelector } from "react-redux";
// Setup Pagination
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function TrangDanhSachPhong() {
  const LOCATION_ID = "616953dfefe193001c0a5b4e";
  // const loading = useSelector((state) => state.roomListReducer.loading);
  const data = useSelector((state) => state.roomListReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchRoomList(LOCATION_ID));
  }, [dispatch]);

  // Pagination
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  let count = 1;
  if (data) count = Math.ceil(data.length / itemsPerPage);
  let startItem = (page - 1) * itemsPerPage;
  let endItem = startItem + itemsPerPage;

  let roomList = data?.slice(startItem, endItem);

  const handleChange = (event, newPage) => {
    //Value is new page
    setPage(newPage);
  };
  // End Pagination

  return (
    <Fragment>
      <header className="container-fluid">
        <Navbar></Navbar>
        <Filters></Filters>
      </header>
      <RoomList roomList={roomList}></RoomList>

      {/* Pagination */}
      <div className="d-flex justify-content-center">
        <Stack spacing={2}>
          <Pagination
            count={count}
            variant="outlined"
            onChange={handleChange}
          />
        </Stack>
      </div>
    </Fragment>
  );
}
