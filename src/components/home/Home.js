import React, { Component } from 'react';
import Header from '../header/Header';
import { TextField } from '@material-ui/core';
import './home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div id="div-searcher">
                    <TextField
                        id="home-searcher"
                        label="Search for a GitHub user here XD"
                        style={{}}
                        placeholder="GitHub User"
                        helperText=""
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default Home;