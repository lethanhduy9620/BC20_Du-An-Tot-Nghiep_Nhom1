import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actAddFilterRoomList,
  actRemoveFilterRoomList,
} from "../modules/actions";

export default function Filters() {
  const dispatch = useDispatch();
  const filterArray = useSelector((state) => state.roomListReducer.filterArray);
  const conditionList = useSelector(
    (state) => state.roomListReducer.conditionList
  );

  const _findIndex = (id) => {
    return conditionList.findIndex((condition) => condition.id === id);
  };

  const isInFilterArray = (id) => {
    if (filterArray.findIndex((element) => element === id) !== -1) {
      return true;
    }
    return false;
  };

  const handleOnClick = (id) => {
    const a = _findIndex(id);
    if (a != -1) {
      conditionList[a].isSelected = !conditionList[a].isSelected;
      if (conditionList[a].isSelected && !isInFilterArray(id)) {
        dispatch(actAddFilterRoomList(id));
      } else if (conditionList[a].isSelected === false && isInFilterArray(id)) {
        dispatch(actRemoveFilterRoomList(id));
      }
    }
  };

  const renderConditionList = () => {
    return conditionList?.map((condition, index) => {
      return (
        <button
          key={condition.id}
          className="btn btn__filter shadow-none"
          data-toggle="button"
          aria-pressed={condition.isSelected}
          onClick={() => handleOnClick(condition.id)}
        >
          {condition.value}
        </button>
      );
    });
  };

  return (
    <div className="container-fluid filter__container">
      <div className="row no-gutters justify-content-between align-items-center ">
        <div className="price__container">
          <select className="price__selection">
            <option>Giá tăng dần</option>
            <option>Giá giảm dần</option>
          </select>
          <i class="fa fa-angle-down" />
        </div>
        <div className="vertical__line" />
        <div className="row no-gutters filterBtn__container justify-content-between">
          {renderConditionList()}
        </div>
        <button className="btn btn-light filter__button d-xl-none ">
          <i className="fa fa-list-ul" /> Filters
        </button>
      </div>
    </div>
  );
}
