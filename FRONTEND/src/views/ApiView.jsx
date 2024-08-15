import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

const ApiView = () => {
    const [province, setProvince] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://datos.gob.es/apidata/nti/territory/Province?_sort=label&_pageSize=10&_page=0')
            .then(response => response.json())
            .then(data => {
                const province = data.result.items[1];
                setProvince(province);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Datos de Provincia</h1>
            <pre id="output">
                {province ? JSON.stringify(province, null, 2) : 'Cargando datos...'}
            </pre>

            <button
                onClick={() => navigate("/")}
                style={{
                    color: 'white',          
                    backgroundColor: 'blue', 
                    border: 'none',          
                    padding: '8px 16px',    
                    borderRadius: '5px',    
                    cursor: 'pointer',       
                }}
                >
                Regresar
                </button>
        </div>
    );
};

export default ApiView;