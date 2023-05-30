import { useEffect, useRef } from "react";
//import { useDispatch } from "react-redux";

const { VITE_CLOUND_NAME, VITE_UPLOAD_PRESENT } = import.meta.env;

const UploadWidget = () => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: VITE_CLOUND_NAME,
            uploadPreset: VITE_UPLOAD_PRESENT
        }, function(error, result) {
            console.log(result);
        });
    }, [])

    return(
        <button className="flex justify-center items-center w-full" 
        onClick={() => widgetRef.current.open()}>Upload</button>
    )
}

export default UploadWidget;