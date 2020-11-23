import React, { useState, useRef } from "react";
import SignatureScreen from "react-native-signature-canvas";

const Sign = () => {
  const ref = useRef();

  const handleSignature = (signature) => {
    console.log(signature);
    // onOK(signature);
    console.log("confirm success!");
  };

  const handleEmpty = () => {
    console.log("Empty");
  };

  const handleClear = () => {
    console.log("clear success!");
  };

  const handleEnd = () => {
    ref.current.readSignature();
    console.log("end success!");
  };

  return (
    <SignatureScreen
      ref={ref}
      onEnd={handleEnd}
      onOK={handleSignature}
      onEmpty={handleEmpty}
      onClear={handleClear}
      autoClear={false}
    />
  );
};

export default Sign;
