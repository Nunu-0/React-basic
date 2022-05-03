import styles from './search_header.module.css';
import React from 'react';

const Search_header = (props) => {
    return(
        <header>
            <img src="/images/logo.png" alt="logo" />
            <h1>Youtube</h1>
            <input type="search" placeholder='Search...' />
            <button type='submit'>
                <img src="/images/search.png" alt="search" />
            </button>
        </header>
    )
};

export default Search_header;