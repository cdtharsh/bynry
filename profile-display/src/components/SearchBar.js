// src/components/SearchBar.js
import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  padding: 10px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.inputBorder};
  border-radius: 5px;
  margin-bottom: 20px;
`;

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <SearchInput
    type="text"
    placeholder="Search profiles..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
);

export default SearchBar;
