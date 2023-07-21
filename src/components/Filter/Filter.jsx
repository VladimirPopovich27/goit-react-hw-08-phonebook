import React from 'react';
import { FilterLabel, FilterInput } from './Filter.styled';
import { filterContacts, selectFilter } from 'redux/filter/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
export const Filter = () => {
  const filtered = useSelector(selectFilter);
  const dispatch = useDispatch();
  const changeFilter = e => {
    dispatch(filterContacts(e.target.value.toLowerCase().trim()));
    return;
  };
  return (
    <FilterLabel>
      Find contact by name
      <FilterInput type="text" value={filtered} onChange={changeFilter} />
    </FilterLabel>
  );
};
