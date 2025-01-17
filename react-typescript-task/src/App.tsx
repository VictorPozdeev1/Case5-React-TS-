import React, { useState, useEffect } from "react";
import { Vehicle, VehicleFilter } from "./data/vehicles/contracts";
import { VehicleApi } from "./data/vehicles/api";
import { Filter } from "./components/Filter";
import { Table } from "./components/Table";

const initialFilter: VehicleFilter = {
    title: "",
    type: null
};

export default function App() {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [filter, setFilter] = useState(initialFilter);

    useEffect(() => {
        const data = VehicleApi.search(filter);
        setVehicles(data);
    }, [filter]);

    return (
        <>
            <Filter value={filter} onChange={setFilter} />
            <Table vehicles={vehicles} />
        </>
    );
}
