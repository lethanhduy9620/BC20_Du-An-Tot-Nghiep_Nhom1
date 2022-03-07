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
          className="btn btn-light filter__item"
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
    <div className="filter__container row justify-content-between align-items-center">
      <button className="btn btn-light filter__item">
        Price <i className="fa fa-angle-down" />
      </button>
      <button className="btn btn-light filter__item">
        Type of place <i className="fa fa-angle-down" />
      </button>
      <div className="vertical__line" />
      {renderConditionList()}
      <button className="btn btn-light filter__button">
        <i className="fa fa-list-ul" /> Filters
      </button>
    </div>
  );
}
