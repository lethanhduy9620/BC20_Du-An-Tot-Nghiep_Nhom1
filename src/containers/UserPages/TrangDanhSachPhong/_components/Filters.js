import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actAddFilterRoomList,
  actRemoveFilterRoomList,
  actResetFilterRoomList,
} from "../modules/actions";

import { listOfFilterButtons } from "./ListOfFilterButton";

export default function Filters() {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    conditionList: [...listOfFilterButtons],
  });

  const buttonRef = useRef([]);

  useEffect(() => {
    buttonRef.current = listOfFilterButtons.map(
      (element, index) => (buttonRef.current[index] = React.createRef())
    );
  }, []);

  const _findIndex = (id) => {
    return state.conditionList.findIndex((condition) => condition.id === id);
  };

  const handleOnClick = (id) => {
    const index = _findIndex(id);
    if (index != -1) {
      let newState = { ...state };
      newState.conditionList[index].isSelected =
        !newState.conditionList[index].isSelected;
      setState(newState);
      if (state.conditionList[index].isSelected) {
        dispatch(actAddFilterRoomList(id));
      } else if (state.conditionList[index].isSelected === false) {
        dispatch(actRemoveFilterRoomList(id));
      }
    }
  };

  const renderFilterButtonsList = () => {
    return state.conditionList?.map((condition, index) => {
      return (
        <button
          ref={buttonRef.current[index]}
          key={condition.id}
          className={`btn btn__filter shadow-none ${condition.responsiveClass}`}
          type="button"
          data-toggle="button"
          aria-pressed={condition.isSelected}
          onClick={() => handleOnClick(condition.id)}
          id={"button" + condition.id}
        >
          {condition.value}
        </button>
      );
    });
  };

  const handleOnChangeFilterList = (id) => {
    const index = _findIndex(id);
    buttonRef.current[index].current.click();
  };

  const renderCheckBoxFilterList = () => {
    return state.conditionList?.map((condition, index) => {
      return (
        <div className="form-check my-3" id={"checkBox" + condition.id}>
          <input
            className="form-check-input"
            type="checkbox"
            onChange={() => handleOnChangeFilterList(condition.id)}
            checked={condition.isSelected}
            id={condition.id}
          />
          <label className="form-check-label" htmlFor={condition.id}>
            {condition.value}
          </label>
        </div>
      );
    });
  };

  const handleOnDeleteCondition = () => {
    let resetConditionList = [];
    resetConditionList = state.conditionList.map((element, index) => {
      buttonRef.current[index].current.classList.remove("active");
      element.isSelected = false;
      return element;
    });
    setState({ conditionList: resetConditionList });
    dispatch(actResetFilterRoomList());
  };

  return (
    <div className="container-fluid filter__container">
      <div className="row no-gutters justify-content-between align-items-center align-items-center">
        <div className="price__container">
          <select className="price__selection">
            <option>Giá tăng dần</option>
            <option>Giá giảm dần</option>
          </select>
          <i class="fa fa-angle-down" />
        </div>

        <div className="vertical__line d-none d-sm-block mx-3" />

        <div className="row no-gutters filterBtn__container d-none d-sm-flex justify-content-around flex-fill">
          {renderFilterButtonsList()}
        </div>
        <div className="filterModal__container d-xl-none ml-3">
          {/* Button trigger filter modal */}
          <button
            className="btn filter__button"
            type="button"
            data-toggle="modal"
            data-target="#filterModal"
          >
            <i className="fa fa-list-ul" /> Filters
          </button>

          {/* Modal */}
          <div
            class="modal fade"
            id="filterModal"
            data-backdrop="static"
            data-keyboard="false"
            tabIndex="-1"
            aria-labelledby="filterModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header align-items-center">
                  <h5
                    class="modal-title text-center flex-fill"
                    id="filterModalLabel"
                  >
                    Filter
                  </h5>
                  <button
                    type="button"
                    class="close ml-0"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form className="row row-cols-2 row-cols-sm-3 no-gutters justify-content-between align-items-center">
                    {renderCheckBoxFilterList()}
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-second"
                    onClick={handleOnDeleteCondition}
                  >
                    Xóa
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-dismiss="modal"
                  >
                    Áp dụng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
