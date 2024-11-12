const EditPrestasi = async (id, id_prestasi, img, title, lomba, lokasi, tanggal) => {
    const db = "https://gebyar-it-ftsuikabogor-justine-default-rtdb.firebaseio.com/";
    try {
        const response = await fetch(`${db}/prestasi/${id}.json`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id_pres: id_prestasi,
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
