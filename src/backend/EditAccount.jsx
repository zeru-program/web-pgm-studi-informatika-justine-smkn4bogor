const EditAccount = async (id, username, email, role, password, created_by) => {
    const db = import.meta.env.VITE_DB;
    try {
        const response = await fetch(`${db}/account/${id}.json`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                email,
                role,
                password,
                created_by
            })
        });
        return response.ok;
    } catch (error) {
        console.error("Error editing data:", error);
        return false;
    }
}

export default EditAccount;
