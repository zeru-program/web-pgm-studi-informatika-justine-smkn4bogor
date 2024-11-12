const DeletePrestasi = async (id) => {
    const db = "https://gebyar-it-ftsuikabogor-justine-default-rtdb.firebaseio.com/";
    
      
    try {
        const response = await fetch(`${db}/prestasi/${id}.json`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        return response.ok
    } catch (error) {
        console.error("Error deleting data:", error);
        Swal.fire("Error", "Data gagal dihapus", "error");
        return false;
    }
}

export default DeletePrestasi;
