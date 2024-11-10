import { useState, useEffect } from 'react';

function useCmsData() {
    const [dataCms, setDataCms] = useState([]);
    const db = "https://gebyar-it-ftsuikabogor-justine-default-rtdb.firebaseio.com/"
    useEffect(() => {
        fetch(db + "cms.json")
            .then((res) => res.json())
            .then((data) => setDataCms(data));
    }, []);

    return { dataCms, setDataCms };
}

export default useCmsData;
