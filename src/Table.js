import React from "react";
// import { useTable } from "react-table";

export default function Row({data}) {
    // return data.map(elem => {
      //  const { 
      //    id, 
      //    first_name, 
      //    last_name, 
      //    email, 
      //    gender, 
      //    diagnosis_code, 
      //    diagnosis_description, 
      //    diagnosis_description_detailed, 
      //    administered_drug_treatment 
      //   } = data //destructuring
      console.log(data)
       return (
          <tr key={data.id}>
             <td>{data.id}</td>
             <td>{data.first_name}</td>
             <td>{data.last_name}</td>
             <td>{data.email}</td>
          </tr>
       )
    // })
  };