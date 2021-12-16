import Screen from "@UIComponents/layout/Screen";
import Section from "@UIComponents/layout/Section";
import { message, Upload } from "antd";
import * as React from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

export interface IContratorImageUploadProps {
  onChange?: (any) => any;
}

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => console.log(reader.result));
  const a = reader.readAsDataURL(img);
  console.log(a);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

export function ImageUpload({
  onChange,
  ...props
}: IContratorImageUploadProps) {
  const [isLoading, setIsLoading] = React.useState(false);

  const [imageUrl, setImageUrl] = React.useState();

  const handleChange = (info) => {
    console.log(info);
    if (info.file.status === "uploading") {
      setIsLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => {
        setImageUrl(imageUrl);
        setIsLoading(false);
      });
    }
  };

  const uploadButton = (
    <div>
      {isLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return <div></div>;
}

export default ImageUpload;
