import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import './table.css'
import Button from './Button'


var raw_data = [
    {
        "listner" : "listner1",
        "queue" : "queue1",
        "application" : "app1",
        "connection_type" : "primary",
        "connection_status" : "active",

    },
    {
      "listner" : "listner2",
      "queue" : "queue2",
      "application" : "app2",
      "connection_type" : "primary",
      "connection_status" : "active",

    },
    {
      "listner" : "listner3",
      "queue" : "queue3",
      "application" : "app3",
      "connection_type" : "primary",
      "connection_status" : "inactive",

    },
]

const raw_columns = [
    {
        Header : 'Listner',
        accessor : 'listner'
    },
    {
        Header : 'Queue',
        accessor : 'queue'
    },
    {
        Header : 'Application',
        accessor : 'application'
    },
    {
        Header : 'Connection Type',
        accessor : 'connection_type'
    },
    {
        Header : 'Connection Status',
        accessor : 'connection_status'
    }
]

const Activate = (id)=>{
  console.log("activate--"+id);
}

const Deactivate = (id)=>{
  console.log("deactivate--"+id);
}

function getdata(idx)
{
  if(raw_data[idx].connection_status === "active")
  return "Deactivate";
  else
  return "Activate";
}


function getAction(idx)
{
  if(raw_data[idx].connection_status === "active")
  return Deactivate;
  else
  return Activate;
}



function Table() {
    // Use the state and functions returned from useTable to build your UI
    const columns = useMemo(()=> raw_columns,[])
    const data = useMemo(()=> raw_data,[])
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({
      columns,
      data,
    })

    return (
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                  <Button name = {getdata(row.getRowProps().key[4])} action = {getAction(row.getRowProps().key[4])} id={row.getRowProps().key[4]}></Button>
                </tr>
              )
            })}
          </tbody>
        </table>
      )
}
    
export default Table;