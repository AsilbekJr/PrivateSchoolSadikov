import React from "react";
import MUIDataTable from "mui-datatables";
import { Container } from "@mui/material";
import Title from "./../Title";
import { useSelector } from "react-redux";

const Result = () => {
  const columns = [
    {
      name: "name",
      label: "Ism familiya",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "matematika",
      label: "Matematika",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "fizika",
      label: "Fizika",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "inglizTili",
      label: "Ingliz tili",
      options: {
        filter: true,
        sort: false,
      },
    },
  ];
  const data = useSelector(state => state.auth.students)
  console.log(data)
  
 
  return (
    <Container sx={{ padding: "5rem 0" }}>
      <Title titleText="Nazorat ishi natijalari" />
      <MUIDataTable
        title={"2023-yil 25-fevraldagi nazorat ishi natijalari"}
        data={data}
        columns={columns}
        options={{
          selectableRows: false,
          rowHover: false,
          filter: false,
          print: false,
          download: false,
          responsive: "scroll",
        }}
      />
    </Container>
  );
};

export default Result;
