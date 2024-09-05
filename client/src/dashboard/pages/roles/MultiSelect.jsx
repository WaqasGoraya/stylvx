import React, { useState } from "react";
import Select from "react-select";

function MultiSelect({options,onChange,value}) {
  return (
    <>
        <Select
          options={options}
          onChange={onChange}
          value={value}
          isMulti
        />
    </>
  );
}

export default MultiSelect;