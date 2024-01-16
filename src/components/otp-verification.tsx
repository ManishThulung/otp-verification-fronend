import { useEffect, useRef, useState } from "react";

interface IProps {
  length: number;
  onOtpSubmit: (otp: string | null) => void;
}
const OtpVerification = ({ length, onOtpSubmit }: IProps) => {
  //creating an empty array of string of given length
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const inputRefs = useRef<HTMLInputElement[] | null>([]);

  console.log(inputRefs, "inputRefs");

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value: any = e.target.value;

    if (isNaN(value)) {
      return;
    }

    const newOtp = [...otp];
    // allow only one number
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // trigger submit
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) {
      onOtpSubmit(combinedOtp);
    }

    // move to next field if current input is filled
    if (
      inputRefs.current &&
      value &&
      index < length - 1 &&
      inputRefs.current[index + 1]
    ) {
      inputRefs.current[index + 1].focus();
    }
  };
  const handleClick = (index: number) => {
    inputRefs.current && inputRefs.current[index].setSelectionRange(1, 1);

    // move focus to the first empty input field
    if (inputRefs.current && index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (
      inputRefs.current &&
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      // moving focus to the previous input on backspace
      inputRefs.current[index - 1].focus();
    }
  };

  useEffect(() => {
    if (inputRefs.current && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);
  return (
    <div>
      {otp?.map((value, index) => (
        <input
          className="h-10 w-10 text-center text-2xl m-1 border-2 border-lime-500"
          key={index}
          value={value}
          ref={(input) => {
            inputRefs.current[index] = input;
          }}
          onChange={(e) => handleChange(index, e)}
          onClick={() => handleClick(index)}
          onKeyDown={(e) => handleKeyDown(index, e)}
        />
      ))}
    </div>
  );
};

export default OtpVerification;
