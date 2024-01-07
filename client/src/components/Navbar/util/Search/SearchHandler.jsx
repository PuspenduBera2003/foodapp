import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIconWrapper from './SearchIconWrapper'
import StyledInputBase from '../StyledInputBase'
import SearchIcon from '@mui/icons-material/Search';
import Search from './Search';

const SearchHandler = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = React.useState('');
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!searchQuery)
            return;
        navigate(`/search?query=food&food=${encodeURIComponent(searchQuery)}`);
    }
    return (
        <Search>
            <form onSubmit={handleSubmit}>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search Prasadam Here"
                    inputProps={{ 'aria-label': 'search' }}
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </form>
        </Search>
    )
}

export default SearchHandler
