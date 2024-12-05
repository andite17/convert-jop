"use client"

import React, { useState } from "react";
import Highlight from 'react-highlight';

const TableInputForm = () => {

    // State for form data
    const [rows, setRows] = useState([
        // {
        //     name: "", email: "", age: ""
        // }
        {
            id : 0,
            name_item : "",
            code_item : "",
            created_by : 1,
            modified_by : 1,
            created_on : null,
            modified_on : null,
            height : 0,
            width : 0,
            length : 0,
            unit : "",
            row_status : null,
            item_type_id : 1,
            mata: 0,
            front_side: "",
            back_side: "",
            alokasi_biaya: 0,
            quantity: 0,
            type_item: "",
            type_state: false
        },
    ]);

    // Handle input change
    const handleInputChange = (index: any, field:any, value:any) => {
        const updatedRows = [...rows];
        const itemTypeId = (codeItem:any) => {
            if (codeItem.startsWith('AA65')) {
                return 3;
            } else if (codeItem.startsWith('AA63')) {
                return 1;
            } else if (codeItem.startsWith('B')) {
                return 2;
            } else if (codeItem.startsWith('C')) {
                return 4;
            } else {
                return 0
            }
        }

        updatedRows[index][field] = value;
        console.log("code item : ", field);
        if(field == 'code_item') {
            console.log("ini convert code item")
            console.log(updatedRows[index]['code_item']);
            updatedRows[index]['item_type_id'] = itemTypeId(updatedRows[index]['code_item']);
        }
        if(field == 'type_state') {
            console.log("ini convert type item", updatedRows[index]['type_state']);
            console.log("Type item :", updatedRows[index]['type_state'] ? "OUTPUT" : "INPUT");
            updatedRows[index]['type_item'] = updatedRows[index]['type_state'] ? "OUTPUT" : "INPUT";
        }

        console.log("state item :", updatedRows[index]['type_state']);
        setRows(updatedRows);
    };

    // Add a new row
    const addRow = () => {
        setRows([...rows, {
            id : 0,
            name_item : "",
            code_item : "",
            created_by : 1,
            modified_by : 1,
            created_on : null,
            modified_on : null,
            height : 0,
            width : 0,
            length : 0,
            unit : "",
            row_status : null,
            item_type_id : 1,
            mata: 0,
            front_side: "",
            back_side: "",
            alokasi_biaya: 0,
            quantity: 0,
            type_item: "",
            type_state: false
        }]);
    };



    // Remove a row
    const removeRow = (index:any) => {
        const updatedRows = rows.filter((_, i) => i !== index);
        setRows(updatedRows);
    };

    // Handle form submission
    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log("Form Data:", rows);
        alert("Form submitted. Check console for data!");
    };

    return (
        <form onSubmit={handleSubmit}>
            <table className={"table-auto border"} style={{ marginBottom: "20px" }}>
                <thead>
                <tr>
                    <th>Type Status</th>
                    <th>id</th>
                    <th>No Kode</th>
                    <th>Nama Item</th>
                    <th>Mata</th>
                    <th>Panjang</th>
                    <th>Lebar</th>
                    <th>Tinggi</th>
                    <th>front side</th>
                    <th>Back side</th>
                    <th>Alokasi</th>
                    <th>Quantity</th>
                    <th>satuan</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {rows.map((row, index) => (
                    <tr key={index} className="h-16">
                        <td className="">
                            <input
                                type="checkbox"
                                onChange={(e) =>
                                    handleInputChange(index, "type_state", e.target.checked)
                                }
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                value={row.id}
                                onChange={(e) =>
                                    handleInputChange(index, "id", e.target.value)
                                }
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={row.code_item}
                                onChange={(e) =>
                                    handleInputChange(index, "code_item", e.target.value)
                                }
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={row.name_item}
                                onChange={(e) =>
                                    handleInputChange(index, "name_item", e.target.value)
                                }
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                value={row.mata}
                                onChange={(e) =>
                                    handleInputChange(index, "mata", e.target.value)
                                }
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={row.length}
                                onChange={(e) =>
                                    handleInputChange(index, "length", e.target.value)
                                }
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={row.width}
                                onChange={(e) =>
                                    handleInputChange(index, "width", e.target.value)
                                }
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={row.height}
                                onChange={(e) =>
                                    handleInputChange(index, "height", e.target.value)
                                }
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={row.front_side}
                                onChange={(e) =>
                                    handleInputChange(index, "front_side", e.target.value)
                                }
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={row.back_side}
                                onChange={(e) =>
                                    handleInputChange(index, "back_side", e.target.value)
                                }
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={row.alokasi_biaya}
                                onChange={(e) =>
                                    handleInputChange(index, "alokasi_biaya", e.target.value)
                                }
                            />
                        </td>

                        <td>
                            <input
                                type="text"
                                value={row.quantity}
                                onChange={(e) =>
                                    handleInputChange(index, "quantity", e.target.value)
                                }
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={row.unit}
                                onChange={(e) =>
                                    handleInputChange(index, "unit", e.target.value)
                                }
                            />
                        </td>
                        <td>
                            <button type="button" onClick={() => removeRow(index)}>
                                Remove
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button type="button" onClick={addRow}>
                Add Row
            </button>
            <br/>
            <button type="submit">Submit</button>


            <div className="mt-40">
                <div className="flex flex-col">
                    <h1>DATA ITEM</h1>
                    <div className="block">
                        <code style={{fontSize: "18px"}}>
                            INSERT INTO public.m_item
                            (name_item,code_item,created_on,modified_on,height,width,length,unit,item_type_id)
                            VALUES <br/>
                            {rows.map((row, index) => {
                                return (
                                    <pre key={index}>
                                        <code style={{fontSize: "18px"}}>
                                            ('{row.name_item}', '{row.code_item}', now(),
                                            now(), {row.length}, {row.width}, {row.height},
                                            '{row.unit}',{row.item_type_id}){index == rows.length - 1 ? ";" : ","}
                                        </code>
                                    </pre>
                                )
                            })}
                            </code>
                        </div>
                    </div>


                    <div className="mt-14 flex">
                        <h5>another query</h5>
                        {rows.map((row, index) => {
                            return (
                                <pre key={index}>
                                    <code key={index} style={{fontSize: "18px"}}>
                                        ('{row.name_item}', '{row.code_item}', {row.length}, {row.width}, {row.height}, '{row.unit}'){index == rows.length - 1 ? ";" : ","}
                                    </code>
                                </pre>
                            )
                        })}
                    </div>


                <div className="mt-12 flex flex-col">
                    <h3>DATA STEP DETAILS</h3>
                    <div className="block">
                        <code style={{fontSize: "18px"}}>
                            INSERT INTO t_steps_details (
                            montase, cost_allocation, quantity, steps_id, item_id, created_on,
                            modified_on,
                            front_side, back_side, "type", as_inventory
                            ) VALUES <br/>
                            {rows.map((row, index) => {
                                return (
                                    <pre key={index}>
                                        <code style={{fontSize: "18px"}}>
                                            ('{row.mata}', '{row.alokasi_biaya}', {row.quantity}, 'MANUAL INPUT STEP
                                            ID',
                                            (SELECT id
                                            FROM m_item WHERE code_item = '{row.code_item}')
                                            now(),
                                            now(), {row.front_side.length > 0 ? row.front_side.length : null}, {row.front_side.length > 0 ? row.front_side.length : null},
                                            '{row.type_item}',
                                            true){index == rows.length - 1 ? ";" : ","}
                                        </code>
                                    </pre>
                                )
                            })}
                        </code>
                    </div>
                    </div>
                </div>
        </form>
);
};

export default TableInputForm;
