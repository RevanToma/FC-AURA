export function convertToBase64(file: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      if (typeof fileReader.result === "string") {
        resolve(fileReader.result);
      } else {
        reject("Expected a string, but got another type");
      }
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
