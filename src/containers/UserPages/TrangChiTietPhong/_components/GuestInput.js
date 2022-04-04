import React, { Fragment, useState, useEffect } from "react";

export default function GuestInput(props) {
  const {
    maxGuest,
    adultNumber,
    childNumber,
    infantNumber,
    increaseNumber,
    decreaseNumber,
  } = props;

  const isDisabled = (id, constraint) => {
    if (maxGuest) {
      switch (id) {
        case "adult": {
          switch (constraint) {
            case "upper": {
              if (adultNumber + childNumber >= maxGuest) return true;
              break;
            }
            case "bottom": {
              if (adultNumber <= 1) return true;
              break;
            }
            default:
              return false;
          }
          break;
        }

        case "child": {
          switch (constraint) {
            case "upper": {
              if (adultNumber + childNumber >= maxGuest) return true;
              break;
            }
            case "bottom": {
              if (childNumber <= 0) return true;
              break;
            }
            default:
              return false;
          }
          break;
        }

        case "infant": {
          switch (constraint) {
            case "upper": {
              if (infantNumber >= 5) return true; //5 is value assumption
              break;
            }
            case "bottom": {
              if (infantNumber <= 0) return true;
              break;
            }
            default:
              return false;
          }
          break;
        }
        default:
          return false;
      }
    }
  };

  return (
    <Fragment>
      <div className="guest__input py-2 px-4 mb-3 position-relative dropdown">
        <div
          type="button"
          id="guestDropdown"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          {adultNumber + childNumber} khách
          {infantNumber > 0 && `, ${infantNumber} trẻ sơ sinh`}
        </div>

        <div
          className="dropdown-menu w-100 px-3 pt-4"
          aria-labelledby="guestDropdown"
        >
          <form>
            {/* Adult */}
            <div
              className="d-flex justify-content-between align-items-center mb-3"
              id="guestLabel"
            >
              <div className="item__name">
                <span>Người lớn</span>
              </div>
              <div className="item__quantity min__width--40 d-flex justify-content-between align-items-center">
                <button
                  type="button"
                  className="btn btn-info"
                  disabled={isDisabled("adult", "bottom")}
                  onClick={() => {
                    decreaseNumber("adult");
                  }}
                >
                  -
                </button>
                <span>{adultNumber}</span>
                <button
                  type="button"
                  className="btn btn-info"
                  disabled={isDisabled("adult", "upper")}
                  onClick={() => {
                    increaseNumber("adult");
                  }}
                >
                  +
                </button>
              </div>
            </div>

            {/* Childeren */}
            <div
              className="d-flex justify-content-between align-items-center mb-3"
              id="guestLabel"
            >
              <div className="item__name">
                <span className="d-block">Trẻ em</span>
                <span>2 - 12 tuổi</span>
              </div>
              <div className="item__quantity min__width--40 d-flex justify-content-between align-items-center">
                <button
                  type="button"
                  className="btn btn-info"
                  disabled={isDisabled("child", "bottom")}
                  onClick={() => {
                    decreaseNumber("child");
                  }}
                >
                  -
                </button>
                <span>{childNumber}</span>
                <button
                  type="button"
                  className="btn btn-info"
                  disabled={isDisabled("child", "upper")}
                  onClick={() => {
                    increaseNumber("child");
                  }}
                >
                  +
                </button>
              </div>
            </div>

            {/* Infants */}
            <div
              className="d-flex justify-content-between align-items-center"
              id="guestLabel"
            >
              <div className="item__name">
                <span className="d-block">Sơ sinh</span>
                <span>Dưới 2 tuổi</span>
              </div>
              <div className="item__quantity min__width--40 d-flex justify-content-between align-items-center">
                <button
                  type="button"
                  className="btn btn-info"
                  disabled={isDisabled("infant", "bottom")}
                  onClick={() => {
                    decreaseNumber("infant");
                  }}
                >
                  -
                </button>
                <span>{infantNumber}</span>
                <button
                  type="button"
                  className="btn btn-info"
                  disabled={isDisabled("infant", "upper")}
                  onClick={() => {
                    increaseNumber("infant");
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </form>
          <div className="text-right mt-3">
            <button type="button" className="btn btn-light font-weight-bold ">
              Đóng
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
