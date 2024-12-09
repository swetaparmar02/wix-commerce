/* eslint-disable prettier/prettier */
// components/DataCollectionForm.js
"use client";

import { ChangeEvent, useState } from "react";

const DataCollectionForm = () => {
  const [formData, setFormData] = useState({
    collectionId: "",
    displayName: "",
    displayField: "",
    fields: [{ key: "", displayName: "", type: "" }],
    permissions: {
      insert: "",
      update: "",
      remove: "",
      read: "",
    },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>, key = null, index = null) => {
    if (key !== null) {
      const updatedFields = [...formData.fields];
      updatedFields[index][key] = e.target.value;
      setFormData({ ...formData, fields: updatedFields });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const response = await fetch("/api/dataCollection", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.success) {
      alert("Collection created successfully!");
    } else {
      alert(`Error: ${result.error}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="collectionId"
        placeholder="Collection ID"
        onChange={handleChange}
      />
      <input
        type="text"
        name="displayName"
        placeholder="Display Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="displayField"
        placeholder="Display Field"
        onChange={handleChange}
      />

      <h4>Fields</h4>
      {formData.fields.map((field, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Field Key"
            value={field.key}
            onChange={(e) => handleChange(e, "key", index)}
          />
          <input
            type="text"
            placeholder="Field Display Name"
            value={field.displayName}
            onChange={(e) => handleChange(e, "displayName", index)}
          />
          <input
            type="text"
            placeholder="Field Type"
            value={field.type}
            onChange={(e) => handleChange(e, "type", index)}
          />
        </div>
      ))}

      <button type="submit">Create Collection</button>
    </form>
  );
};

export default DataCollectionForm;
