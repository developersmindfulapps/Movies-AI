import moviesData from "../store/moviesStore";

const Hero = () => {
  const trailer = moviesData((state) => state.trailer);

  return (
    <div>
      <div className="pointer-events-none w-screen absolute top-0">
        <iframe className="aspect-video w-screen"
          src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=${trailer?.key}&playsinline=1`}
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </div>
  );
};

export default Hero;
