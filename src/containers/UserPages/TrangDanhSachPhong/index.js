import React, { Fragment, useEffect, useState } from "react";
import Navbar from './_components/Navbar_DSPhong'
import Filters from "./_components/Filters";
import "./style_danhsachphong.css";
import RoomList from "./_components/RoomList";
import { actFetchRoomList } from "./modules/actions";
import { useDispatch, useSelector } from "react-redux";
// Setup Pagination
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function TrangDanhSachPhong() {
  const locationID = "616953dfefe193001c0a5b4e";
  // const loading = useSelector((state) => state.roomListReducer.loading);
  const data = useSelector((state) => state.roomListReducer.data);

  const dispatch = useDispatch();

  // Call API
  useEffect(() => {
    dispatch(actFetchRoomList(locationID));
  }, []);

  // Pagination
  const [page, setPage] = useState(1);
  const [renderedData, setData] = useState(null);
  const itemsPerPage = 10;
  let count = 1;
  if (data) count = Math.ceil(data.length / itemsPerPage);

  const handleChange = (event, newPage) => {
    //Value is new page
    setPage(newPage);
  };

  useEffect(() => {
    let startItem = (page - 1) * itemsPerPage;
    let endItem = startItem + itemsPerPage;
    if (data?.slice(startItem, endItem)?.length === 0) {
      setPage(page - 1);
    } else {
      setData(data?.slice(startItem, endItem));
    }
  }, [page, data]);
  // End Pagination

  return (
    <Fragment>
      <header className="container-fluid">
        <Navbar></Navbar>
        <Filters></Filters>
      </header>

      {renderedData?.length !== 0 && (
        <RoomList
          roomList={renderedData}
          roomQuantity={data?.length}
        ></RoomList>
      )}

      {/* Pagination */}
      <div className="d-flex justify-content-center">
        <Stack spacing={2}>
          <Pagination
            count={count}
            variant="outlined"
            onChange={handleChange}
            defaultPage={1}
            page={page}
          />
        </Stack>
      </div>
    </Fragment>
  );
}
