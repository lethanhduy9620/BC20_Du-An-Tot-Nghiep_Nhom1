import React, { Fragment } from "react";

import WifiIcon from "../../components/Icons/WifiIcon";
import ElevatorIcon from "../../components/Icons/ElevatorIcon";
import FireplaceIcon from "../../components/Icons/FireplaceIcon";
import HotTubIcon from "../../components/Icons/HotTubIcon";
import PoolIcon from "../../components/Icons/PoolIcon";
import HeatingIcon from "../../components/Icons/HeatingIcon";
import GymIcon from "../../components/Icons/GymIcon";
import DryerIcon from "../../components/Icons/DryerIcon";
import KitchenIcon from "../../components/Icons/KitchenIcon";
import TVIcon from "../../components/Icons/TVIcon";

export default function IconList(props) {
  const IconList = [
    {
      key: "elevator",
      name: "Thang máy",
      component: <ElevatorIcon />,
    },
    {
      key: "hotTub",
      name: "Hồ massage",
      component: <HotTubIcon />,
    },
    {
      key: "pool",
      name: "Hồ bơi",
      component: <PoolIcon />,
    },
    {
      key: "indoorFireplace",
      name: "Lò sưởi",
      component: <FireplaceIcon />,
    },
    {
      key: "dryer",
      name: "Máy sấy",
      component: <DryerIcon />,
    },
    {
      key: "gym",
      name: "Phòng tập gym",
      component: <GymIcon />,
    },
    {
      key: "kitchen",
      name: "Nhà bếp",
      component: <KitchenIcon />,
    },
    {
      key: "wifi",
      name: "Wifi",
      component: <WifiIcon />,
    },
    {
      key: "heating",
      name: "Máy sưởi",
      component: <HeatingIcon />,
    },
    {
      key: "cableTV",
      name: "Truyền hình cáp",
      component: <TVIcon />,
    },
  ];

  const roomData = props.roomData;

  const renderIconList = () => {
    return IconList.map((icon, index) => {
      if (roomData[icon.key]) {
        return (
          <div key={index} className="col d-flex my-3">
            <span className="utility__icon mr-3">{icon.component}</span>
            <span className="utility__desc">{icon.name}</span>
          </div>
        );
      }
    });
  };

  return <Fragment>{roomData && renderIconList()}</Fragment>;
}
