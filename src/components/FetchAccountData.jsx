import { useState, useEffect } from 'react';

function FetchAccountData() {
    const [dataAccount, setDataAccount] = useState([]);
    const db = "https://gebyar-it-ftsuikabogor-justine-default-rtdb.firebaseio.com/"
    useEffect(() => {
        fetch(db + "account.json")
            .then((res) => res.json())
            .then((data) => setDataAccount(data));
    }, []);

    return { dataAccount, setDataAccount };
}

export default FetchAccountData;
