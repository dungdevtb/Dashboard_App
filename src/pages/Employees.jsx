import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Inject,
  Search,
  Toolbar,
} from "@syncfusion/ej2-react-grids";

import { employeesGrid, employeesData } from "../data/dummy";

import { Header } from "../components";

const Employees = () => {
  const pageSettings = { pageSize: 6 };

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />

      {/* tạo bẳng dùng syncfusion */}
      {/* Example: Tìm kiếm */}
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={["Search"]}
        width="auto"
        pageSettings={pageSettings}
      >
        <ColumnsDirective>
          {employeesGrid?.map((item, idx) => (
            <ColumnDirective key={idx} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
