import axios from "axios";

export const imageUpload = async image => {
    console.log(image);

    const formData = new FormData();
    formData.append('image', image);
    console.log(formData);
    // console.log(import.meta.env.VITE_IMGBB_APIKEY);
    // console.log(import.meta.env.VITE_IMGBB_URL);

    const { data } = await axios.post(`${import.meta.env.VITE_IMGBB_URL}?key=${import.meta.env.VITE_IMGBB_APIKEY}`, formData);
    console.log(data);

    return data.data.display_url;
};