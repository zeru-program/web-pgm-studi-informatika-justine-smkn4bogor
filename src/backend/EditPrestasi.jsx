const EditPrestasi = async (id, img, title, lomba, lokasi, tanggal) => {
    const db = import.meta.env.VITE_DB;
    try {
        const response = await fetch(`${db}/prestasi/${id}.json`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                img,
                title,
                lomba,
                lokasi,
                tanggal
            })
        });
        return response.ok;
    } catch (error) {
        console.error("Error editing data:", error);
        return false;
    }
}

export default EditPrestasi;
