import React, { useState } from "react";
import OtpVerification from "./otp-verification";

const OtpInput = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const regex = /[^0-9]/g;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      phoneNumber.length < 10 ||
      phoneNumber.length > 10 ||
      regex.test(phoneNumber)
    ) {
      alert("Invalid phone number");
      return;
    }
    setOpen(true);

    // call api to send verification number
  };

  const onOtpSubmit = (otp: string | null) => {
    console.log(otp);
  };

  return (
    <div className="text-center py-4">
      {!open ? (
        <form onSubmit={handleSubmit}>
          <input
            className="border border-lime-300"
            placeholder="Enter the phone number"
            value={phoneNumber}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <>
          <div className="text-2xl font-medium">
            Verification code submitted to {phoneNumber}
          </div>

          <OtpVerification length={5} onOtpSubmit={onOtpSubmit} />
        </>
      )}
    </div>
  );
};

export default OtpInput;
