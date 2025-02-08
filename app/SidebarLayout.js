"use client";

import React from "react";
import { Layout, Menu } from "antd";
import Link from "next/link";

const { Header, Sider, Content } = Layout;

const menuItems = [
  {
    key: "U1StarterA1",
    label: "Unit 1: Starter (A1)",
    children: [
      {
        key: "S1WhatisCode",
        label: "Section: What is Code?",
        children: [
          {
            key: "S1WhatisCodeIntro",
            label: "What is Code?",
            path: "/Material/U1Starter/S1WhatisCode/1U1S1Intro",
          },
          {
            key: "S1CodeStructure",
            label: "Code Structure",
            path: "/Material/U1Starter/S1WhatisCode/2U1S1CodeStructure",
          },
          {
            key: "S1Languages",
            label: "Languages",
            path: "/Material/U1Starter/S1WhatisCode/3U1S1Languages",
          },
          {
            key: "S1ControlStructures",
            label: "Control Structures",
            path: "/Material/U1Starter/S1WhatisCode/4U1S1ControlStructures",
          },
        ],
      },
      {
        key: "S2HowaComputerworks",
        label: "Section: How a Computer Works",
        children: [
          {
            key: "S2Intro",
            label: "Intro",
            path: "/Material/U1Starter/S2HowaComputerworks/1U1S2Intro",
          },
          {
            key: "S2OperatingSystems",
            label: "Operating Systems",
            path: "/Material/U1Starter/S2HowaComputerworks/2U1S2OperatingSystems",
          },
          {
            key: "S2Files",
            label: "Files",
            path: "/Material/U1Starter/S2HowaComputerworks/3U1S2Files",
          },
        ],
      },
      {
        key: "S3OOP",
        label: "Section: Object-Oriented Programming",
        children: [
          {
            key: "S3Objects",
            label: "Objects",
            path: "/Material/U1Starter/S3OOP/1U1S3Objects",
          },
          {
            key: "S3Classes",
            label: "Classes",
            path: "/Material/U1Starter/S3OOP/2U1S3Classes",
          },
        ],
      },
    ],
  },
  {
    key: "U2PythonA2",
    label: "Unit 2: Python (A2)",
    children: [
      {
        key: "1U2Intro",
        label: "Python and Its Uses",
        path: "/Material/U2Python/1U2Intro",
      },
      {
        key: "2U2Syntax",
        label: "Learning Python Syntax",
        path: "/Material/U2Python/2U2Syntax",
      },
      {
        key: "3U2OOPPython",
        label: "Creating Objects in Python",
        path: "/Material/U2Python/3U2OOPPython",
      },
      {
        key: "4U2Functions",
        label: "Functions",
        path: "/Material/U2Python/4U2Functions",
      },
    ],
  },
  {
    key: "U3DataStructuresB1",
    label: "Unit 3: Data Structures (B1)",
    children: [
      {
        key: "1U3Intro",
        label: "Data Storage and Analysis",
        path: "/Material/U3DataStructures/1U3Intro",
      },
      {
        key: "2U3Arrays",
        label: "Python and To-Do Lists",
        path: "/Material/U3DataStructures/2U3Arrays",
      },
      {
        key: "3U3SQL",
        label: "SQL and Databases",
        path: "/Material/U3DataStructures/3U3SQL",
      },
    ],
  },
];

// Recursive function to convert our menuItems structure into the format required by Ant Design's Menu
const convertItems = (items) =>
  items.map((item) => {
    const newItem = {
      key: item.key,
      label: item.path ? <Link href={item.path}>{item.label}</Link> : item.label,
    };
    if (item.children) {
      newItem.children = convertItems(item.children);
    }
    return newItem;
  });

const formattedMenuItems = convertItems(menuItems);

const SidebarLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={250} theme="light">
        <Menu
          mode="inline"
          defaultSelectedKeys={["U1StarterA1"]}
          items={formattedMenuItems}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            background: "#037bfc",
            padding: "20px",
            color: "white",
            fontSize: "18px",
            textAlign: "center",
          }}
        >
          A course designed by Faith Goldsberry
        </Header>
        <Content style={{ margin: "16px", padding: 24, background: "#fff" }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default SidebarLayout;
