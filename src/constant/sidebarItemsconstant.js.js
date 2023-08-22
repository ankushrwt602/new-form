import React from "react";
import {
  HomeOutlined,
  ApartmentOutlined,
  LogoutOutlined,
  CarryOutOutlined,
  AppstoreOutlined,
  ContainerOutlined,
} from "@ant-design/icons";

export const getItem = (label, key, icon, children, type ,url) => {
  return {
    key,
    icon,
    children,
    label,
    type,
    url
  };
};

export const employeItems = [
  getItem("Dashboard", "1", <HomeOutlined /> ,'','employee'),
  getItem("Department", "2", <ApartmentOutlined />,'','employee'),
  getItem("Option 5", "3", <ContainerOutlined />,'','employee'),
  getItem("Apply Leave", "4", <CarryOutOutlined /> ,'','employee' ,'/main/apply-leave'),
  getItem("Leave", "5", <AppstoreOutlined />,'','employee'),
  getItem("Log Out", "6", <LogoutOutlined />,'','employee'),
];


export const adminItems = [
    getItem("Dashboard", "1", <HomeOutlined />,'' ,'admin'),
    getItem("Employee", "2", <ApartmentOutlined /> ,'','admin'),
    getItem("Leave", "3", <ContainerOutlined /> ,'' ,'admin'),
    getItem("Log Out", "4", <LogoutOutlined /> ,'' ,'admin'),
  ];