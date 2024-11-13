const PostCmsImg = async (title, img, created_by) => {
    const db = import.meta.env.VITE_DB;
    try {
        const response = await fetch(`${db}/cms_img.json`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                img,
                created_by,
                created_at: new Date()
            })
        }).catch(e => alert(e))
        return response.ok;
    } catch (error) {
        console.error("Error posting data:", error);
        return false;
    }
}

export default PostCmsImg;
