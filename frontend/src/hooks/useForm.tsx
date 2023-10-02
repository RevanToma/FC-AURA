import { useState } from "react";

export const useForm = (initialFields: string[]) => {
  const initialFormData = initialFields.reduce(
    (acc, field) => ({ ...acc, [field]: "" }),
    {}
  );

  const initialFieldValidity = initialFields.reduce(
    (acc, field) => ({ ...acc, [field]: false }),
    {}
  );

  const [formData, setFormData] =
    useState<Record<string, string | boolean>>(initialFormData);
  const [fieldValidity, setFieldValidity] =
    useState<Record<string, boolean>>(initialFieldValidity);

  return {
    formData,
    setFormData,
    fieldValidity,
    setFieldValidity,
  };
};
