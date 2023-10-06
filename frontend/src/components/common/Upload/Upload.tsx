import { useQuery } from "@apollo/client";

import { useAuth } from "../../../context/auth/auth";
import { FC } from "react";

import { GET_IMAGE } from "../../../Mutations/Mutations";
import * as S from "./UploadStyles";
import { convertToBase64 } from "../../helpers/ConvertToBase64";
import { PiSoccerBallThin } from "react-icons/pi";

type UploadProps = {
  setFile?: React.Dispatch<React.SetStateAction<string>>;
  file?: string;
};

const Upload: FC<UploadProps> = ({ setFile, file }) => {
  const auth = useAuth();
  const userId = auth.user?.id;

  const { data, loading } = useQuery(GET_IMAGE, {
    variables: { getUserId: userId },
  });

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please upload a valid image file!");
        return;
      }
      const maxSize = 5 * 1024 * 1024; // 5MB in bytes
      if (file.size > maxSize) {
        console.log("to big size");
        alert("Image size is too large! Please upload an image less than 5MB.");
        return;
      }
      const base64 = await convertToBase64(file);
      if (!setFile) return console.log("No setFile");
      setFile(base64);
    }
  };

  if (!userId) {
    return null;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <S.ImageContainer>
        {file || (data && data.getUser.image) ? (
          <img
            src={file || `${process.env.REACT_APP_IMAGE}${data.getUser.image}`}
            alt="User"
          />
        ) : (
          <PiSoccerBallThin color="white" />
        )}
        <input
          type="file"
          id="file-upload"
          onChange={handleFileUpload}
          className="inputNone"
          accept="image/*"
        />
      </S.ImageContainer>

      <S.LabelDiv>
        <label htmlFor="file-upload">Ändra bild</label>
      </S.LabelDiv>
    </>
  );
};
export default Upload;
