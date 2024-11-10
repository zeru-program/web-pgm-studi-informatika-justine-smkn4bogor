import { useState, useEffect } from 'react';

function FetchBeritaData() {
    const [dataBerita, setDataBerita] = useState([]);
    const db = "https://gebyar-it-ftsuikabogor-justine-default-rtdb.firebaseio.com/"
    useEffect(() => {
        fetch(db + "berita.json")
            .then((res) => res.json())
            .then((data) => setDataBerita(Object.values(data)));
    }, []);

    return { dataBerita, setDataBerita };
}

export default FetchBeritaData;
