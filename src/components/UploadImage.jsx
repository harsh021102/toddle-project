import React, { useRef, useState } from "react";
import { picture } from "../misc/ImagesAndIcons";

function UploadImage() {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState();

  const handleUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setFile(URL.createObjectURL(event.target.files[0]))
    console.log("Selected file:", file);
  };

  return (
    <div>
      <button onClick={handleUpload} className="w-[200px] h-[32px] flex justify-start items-center gap-[8px] py-[16px] pl-[18px] font-avenir-bold font-[600] text-[14px] leading-[20px] text-[#717171] border-[1px] rounded-[8px] mt-[24px]">
        <img src={picture} alt="pic" className="w-[19px] h-[19px]" />
        Add your image</button>
      <input
        type="file"
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleFileSelect}
      />
    </div>
  );
}

export default UploadImage;