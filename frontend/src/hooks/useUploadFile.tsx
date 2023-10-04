// hooks/useUploadFile.ts
import { useMutation } from "@apollo/client";
import { UPLOAD_FILE } from "../Mutations/Mutations";

const useUploadFile = () => {
  const [uploadFileMutation] = useMutation(UPLOAD_FILE);

  const uploadFile = async (newImage: string) => {
    try {
      const { data } = await uploadFileMutation({
        variables: { file: newImage },
      });

      if (data.uploadFile) {
        console.log("File uploaded successfully");
        return true;
      } else {
        console.error("File upload failed");
        return false;
      }
    } catch (error) {
      console.error("File upload failed:", error);
      return false;
    }
  };

  return uploadFile;
};

export default useUploadFile;
