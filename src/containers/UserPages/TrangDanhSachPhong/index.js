import React, { Fragment, useEffect, useState } from "react";
import Navbar from "./_components/Navbar_DSPhong";
import Filters from "./_components/Filters";
import "./style_danhsachphong.css";
import RoomList from "./_components/RoomList";
import { actFetchRoomList } from "./modules/actions";
import { useDispatch, useSelector } from "react-redux";
// Setup Pagination
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useParams } from "react-router";

export default function TrangDanhSachPhong(props) {
  // const locationID = "616953dfefe193001c0a5b4e";
  const { locationID } = useParams();

  const dispatch = useDispatch();

  // Call API
  useEffect(() => {
    dispatch(actFetchRoomList(locationID));
  }, []);

  const loading = useSelector((state) => state.roomListReducer.loading);
  const data = useSelector((state) => state.roomListReducer.data);

  // Pagination
  const [page, setPage] = useState(1);
  const [renderedData, setRenderedData] = useState(null);
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
    if (data?.slice(startItem, endItem)?.length === 0 && page > 1) {
      setPage(page - 1);
    } else {
      setRenderedData(data?.slice(startItem, endItem));
    }
  }, [page, data]);

  // End Pagination
  if (loading) return <div>Loading...</div>;
  return (
    <section id="roomList">
      <header>
        <Navbar />
        <Filters />
        <hr className="mt-2 mb-0" />
      </header>

      {renderedData?.length !== 0 && (
        <RoomList roomList={renderedData} roomQuantity={renderedData?.length} />
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
    </section>
  );
}
