import { useState, useEffect } from 'react';

function FetchAccountData() {
    const [dataAccount, setDataAccount] = useState([]);
    const db = import.meta.env.VITE_DB;
    useEffect(() => {
        fetch(db + "account.json")
            .then((res) => res.json())
            .then((data) => setDataAccount(Object.entries(data).map(([key, value]) => ({ key, ...value }))));
    }, []);

    return { dataAccount, setDataAccount };
}

export default FetchAccountData;
