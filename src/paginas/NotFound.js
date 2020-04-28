import React, { Component } from 'react';
import { ButtonBackHome } from "../componentes/ButtonBackHome";

export const NotFound = () => (
    <div>
        <h1 style={{color: '#000' , fontSize: 30}}>
            404!
        </h1>
        <h3>No existe la página.</h3>
        <ButtonBackHome />
    </div>
)