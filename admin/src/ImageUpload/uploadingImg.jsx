import React, { useState, useEffect } from "react";

import { translationEs, stylesColor } from "./uploadingConfig";

import Button from "@mui/material/Button";

export default function UploadImg({ setimgUp }) {
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
          setimgUp(result.info.url);
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
