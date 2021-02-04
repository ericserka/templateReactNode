import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Pagina from './pages/Pagina'; //não precisa colocar o /index porque pelo nome do arquivo ser index, ele fica subtendido

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Pagina} /> {/*o exact é necessário para q os outros paths funcionem normalmente*/}
                <Route path="/pagina" component={Pagina} />
            </Switch>
        </BrowserRouter>
    );
}