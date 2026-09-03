import { NETFLIX_LOGO } from "../../constant";

const Headerout = () => {
  return (
      <div className="p-2 flex justify-between items-center relative z-2">
        <img
          src={NETFLIX_LOGO}
          alt="logo"
          className="p-[10px] bg-[radial-gradient(#c3bdbd0f,#ddd7d700)] w-38 h-auto sm: w-46 lg:w-56 rounded-3xl"
        />
      </div>
  );
};

export default Headerout;
