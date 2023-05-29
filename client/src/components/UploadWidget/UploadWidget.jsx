import { useEffect, useRef } from "react";
//import { useDispatch } from "react-redux";
import { Image } from 'cloudinary-react';
const { VITE_CLOUND_NAME, VITE_UPLOAD_PRESENT } = import.meta.env;
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const UploadWidget = () => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    const [imageUrl, setImageUrl] = useState("");


    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: VITE_CLOUND_NAME,
            uploadPreset: VITE_UPLOAD_PRESENT
        }, function (error, result) {
            if (!error && result && result.event === "success") {
                // Guardar la URL de la imagen en el estado
                setImageUrl(result.info.secure_url);
            }
        });
    }, [])

    return (
        <>

            {imageUrl && (
                <Image cloudName={VITE_CLOUND_NAME} publicId={imageUrl} width="300" />
            )}
            <button
                className="flex justify-center items-center w-full"
                onClick={() => widgetRef.current.open()}
            >
                Upload
            </button>

            {/* <Image cloudName={VITE_CLOUND_NAME} publicId="https://res.cloudinary.com/dfbafogea/image/upload/v1685386037/vyqneodxjuihr5e4owni.png" width="300" />
        <Image cloudName={VITE_CLOUND_NAME} publicId="https://res.cloudinary.com/dfbafogea/image/upload/v1685310197/sml-app/mrdn5xji01gny4qdrnw5.jpg" width="300" />
        <Image cloudName={VITE_CLOUND_NAME} publicId="https://res.cloudinary.com/dfbafogea/image/upload/v1685310011/cxcniz7b8kbqcpx44kdr.jpg" width="300" /> */}
            {/* <button className="flex justify-center items-center w-full" 
        onClick={() => widgetRef.current.open()}>Upload</button> */}
        </>
    )
}

export default UploadWidget;