import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Inject,
  Search,
  Toolbar,
  Edit,
  Selection,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";

import { customersData, customersGrid } from "../data/dummy";

import { Header } from "../components";

const Customers = () => {
  const pageSettings = { pageSize: 6 };

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />

      {/* tạo bẳng dùng syncfusion */}
      {/* Example: Sửa xóa*/}
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Delete", "Search"]}
        width="auto"
        editSettings={{
          allowAdding: true,
          allowEditing: true,
          allowDeleting: true,
        }}
        // pageSettings={pageSettings}
      >
        <ColumnsDirective>
          {customersGrid?.map((item, idx) => (
            <ColumnDirective key={idx} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[Page, Search, Toolbar, Selection, Edit, Sort, Filter]}
        />
      </GridComponent>
    </div>
  );
};

export default Customers;
