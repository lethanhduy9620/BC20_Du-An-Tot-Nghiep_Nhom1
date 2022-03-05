import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";

export default function PaginationMUI() {
  const data = useSelector((state) => state.roomListReducer.data);

  const [page, setPage] = useState(0);
  const itemPerPage = 10;
  let count = 1;

  if (data) count = Math.ceil(data.length / itemPerPage);

  const handleChange = (event, newPage) => {
    //Value is new page
    setPage(newPage);
  };

  return (
    <Stack spacing={2}>
      <Pagination count={count} variant="outlined" onChange={handleChange} />
    </Stack>
  );
}
