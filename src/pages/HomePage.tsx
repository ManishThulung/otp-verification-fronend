import OtpInput from "../components/otp-input";
import { useThemeContext } from "../contexts";

const HomePage = () => {
  const { theme } = useThemeContext();

  return (
    <>
      <div
        className={`text-4xl text-center py-10 px-20 font-bold ${
          theme == "dark" && "bg-red-600"
        }`}
      >
        OTP LOGIN
      </div>

      <OtpInput />
    </>
  );
};

export default HomePage;
