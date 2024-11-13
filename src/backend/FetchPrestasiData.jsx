import React, { useState, useEffect } from 'react';

function FetchPrestasiData() {
    const [dataPrestasi, setDataPrestasi] = useState([]);
    const db = import.meta.env.VITE_DB;
    useEffect(() => {
        fetch(db + "prestasi.json")
            .then((res) => res.json())
            .then(data => setDataPrestasi(Object.entries(data).map(([key, value]) => ({ key, ...value }))))
    }, []);

    return { dataPrestasi, setDataPrestasi };
}

export default FetchPrestasiData;
