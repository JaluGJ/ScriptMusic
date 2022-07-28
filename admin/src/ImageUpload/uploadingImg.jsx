import React, { useState, useEffect } from "react";

import { translationEs, stylesColor } from "./uploadingConfig";

//import { validate } from "../components/Newproduct/errors";

import Button from "@mui/material/Button";

export default function UploadImg({ setInput, input, setError, validate }) {
  const [myWidget, setmyWidget] = useState({});

  useEffect(() => {
    var myWidgetConect = window.cloudinary.createUploadWidget(
      {
        cloudName: "dzonjuriq",
        uploadPreset: "lsyxmkle",
        language: "es",
        buttonClass: "bg-action",
        text: translationEs,
        styles: stylesColor,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setInput({...input, image: result.info.url});
          setError(validate({...input, image: result.info.url}))
        }
      }
    );
    myWidgetConect.open();
    myWidgetConect.close();
    setmyWidget(myWidgetConect);// eslint-disable-next-line
  }, []);

  async function uploadImage() {
    await myWidget.open();
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => uploadImage()}>
        Subir foto
      </Button>
    </div>
  );
}
