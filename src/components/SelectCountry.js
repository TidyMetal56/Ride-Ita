import React from "react";
import { FormControl, Select, Center, CheckIcon, WarningOutlineIcon, NativeBaseProvider } from "native-base";

const SelectCountry = ({selectedValue, onValueChange}) => {
  return <>
      <FormControl isRequired >
        <Select accessibilityLabel="Country" placeholder="Country" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size={3} 
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        />
      }}>
          <Select.Item label="Flag Mexico" value="+52 1" />
          <Select.Item label="Flag USA" value="+001" />
          <Select.Item label="Flag Argentina" value="+54" />
        </Select>
        {/*
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Please make a selection!
        </FormControl.ErrorMessage>
        */}
      </FormControl>
      </>
};

    export default SelectCountry
    