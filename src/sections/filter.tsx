import styled from "styled-components";
import { Button } from "../components/button";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import React, { useState } from "react";

interface IProps {
  filterKey: string;
  filterValue: string;
  dataKeys: any[];
  handleKeyChange: any;
  handleValueChange: any;
  onSubmitfunc: () => void;
}

export const FilterWine = (props: IProps) => {
  const [error, setError] = useState(false);
  const onsubmit = () => {
    if(props.filterKey.length === 0 || props.filterValue.length === 0){setError(true)}
    else {props.onSubmitfunc()}
  }
    return (
          <StyledContainer onSubmit={onsubmit}>
          <StyledSelect error={error}>
            <StyledInputLabel id="demo-simple-select-label">Filter by:</StyledInputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={props.filterKey}
              onChange={props.handleKeyChange}
            >
              {props.dataKeys.map((item) => <MenuItem value={item.keyName} key={item.keyName}>{item.label}</MenuItem>)}
            </Select>
            {error && <FormHelperText>Please select a filter</FormHelperText>}
          </StyledSelect>
          <StyledInput>
            <InputLabel htmlFor="standard-adornment-amount">Type here...</InputLabel>
            <Input
              id="standard-adornment-amount"
              value={props.filterValue}
              onChange={props.handleValueChange}
            />
          </StyledInput>
          <Button primary onClick ={() => onsubmit()}>Filter</Button>
          </StyledContainer>
    );
};

export const MemoizedFilterWine = React.memo(FilterWine);

const StyledInputLabel = styled(InputLabel)`font-size: 12px;`

const StyledSelect = styled(FormControl)`
  width: 125px;
`

const StyledInput = styled(FormControl)`
  width: 180px;
  padding-left: 5px;
  font-size: 14px;
`

const StyledContainer = styled.form`
  width: 305px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
`;