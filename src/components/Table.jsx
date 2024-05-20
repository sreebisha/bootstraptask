import React from "react";

import Table from "react-bootstrap/Table";
export const Tables = () => {
    const dummyData = [
        {
            id: 1,
            name: "John Doe",
            email: "john@example.com",
            address: "123 Main St, City, Country",
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "jane@example.com",
            address: "456 Elm St, Town, Country",
        },
        {
            id: 3,
            name: "Alice Johnson",
            email: "alice@example.com",
            address: "789 Oak St, Village, Country",
        },
        {
            id: 4,
            name: "Bob Brown",
            email: "bob@example.com",
            address: "101 Pine St, Hamlet, Country",
        },
        {
            id: 5,
            name: "Emily Davis",
            email: "emily@example.com",
            address: "111 Cedar St, City, Country",
        },
        {
            id: 6,
            name: "Michael Wilson",
            email: "michael@example.com",
            address: "222 Maple St, Town, Country",
        },
        {
            id: 7,
            name: "Sarah Lee",
            email: "sarah@example.com",
            address: "333 Birch St, Village, Country",
        },
        {
            id: 8,
            name: "David Garcia",
            email: "david@example.com",
            address: "444 Pine St, Hamlet, Country",
        },
        {
            id: 9,
            name: "Jessica Martinez",
            email: "jessica@example.com",
            address: "555 Elm St, City, Country",
        },
        {
            id: 10,
            name: "Chris Thompson",
            email: "chris@example.com",
            address: "666 Oak St, Town, Country",
        },
    ];

    return (
        <div style={{ marginTop: 30 }}>
            <div style={{ paddingTop: 10 }}>
                <h2>Table</h2>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyData.map((data) => (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.address}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};
