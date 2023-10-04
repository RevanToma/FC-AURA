import { gql, useQuery } from "@apollo/client";

import { useAuth } from "../../../context/auth/auth";
import { FC, useState } from "react";
import { convertToBase64 } from "../../../helper/ConvertToBase64";
import { GET_IMAGE } from "../../../Mutations/Mutations";
import * as S from "./UploadStyles";

type UploadProps = {
  setFile: React.Dispatch<React.SetStateAction<string>>;
  file: string;
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
      const base64 = await convertToBase64(file);
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
          <>
            <label htmlFor="file-upload" className="custom-file-upload">
              Välj en bild
            </label>
            <div>click here to add an image</div>
          </>
        )}
        <input type="file" id="file-upload" onChange={handleFileUpload} />
      </S.ImageContainer>
      <S.LabelDiv>
        <label htmlFor="file-upload">Ändra bild</label>
      </S.LabelDiv>
    </>
  );
};
export default Upload;
