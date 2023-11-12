import React from "react";
import { VehicleFilter } from "../data/vehicles/contracts";
import { VehicleTypeSelect } from "./VehicleTypeSelect";

export const Filter: React.FC<{ value: VehicleFilter, onChange: (value: VehicleFilter) => void }> = ({ value, onChange }) => (
    <div>
        <input type="text" value={value.title} onChange={e => onChange({ ...value, title: e.target.value })} />
        <VehicleTypeSelect value={value.type} onChange={type => onChange({ ...value, type })} />
    </div>
)
