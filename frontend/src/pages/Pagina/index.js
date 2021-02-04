import React from 'react';
import './styles.css';
import Component from '../../components/Component';

export default function PrincipalAdm() {

    return (
        <> {/* React Fragment */}
            <Component title="título azul do css da component" />
            <h1 className="h1-page">título vermelho do css da página</h1>
        </>
    );
}