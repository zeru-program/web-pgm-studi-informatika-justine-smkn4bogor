import { useState, useEffect } from 'react';

function FetchPrestasiData() {
    const [dataPrestasi, setDataPrestasi] = useState([]);
    const db = "https://gebyar-it-ftsuikabogor-justine-default-rtdb.firebaseio.com/"
    useEffect(() => {
        fetch(db + "prestasi.json")
            .then((res) => res.json())
            .then((data) => setDataPrestasi(data));
    }, []);

    return { dataPrestasi, setDataPrestasi };
}

export default FetchPrestasiData;
