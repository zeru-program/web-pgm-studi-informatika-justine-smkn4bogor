import { useState, useEffect } from 'react';

function FetchBeritaData() {
    const [dataBerita, setDataBerita] = useState([]);
    const db = import.meta.env.VITE_DB;
    useEffect(() => {
        fetch(db + "berita.json")
            .then((res) => res.json())
            .then((data) => setDataBerita(Object.entries(data).map(([key, value]) => ({ key, ...value }))));
    }, []);

    return { dataBerita, setDataBerita };
}

export default FetchBeritaData;
