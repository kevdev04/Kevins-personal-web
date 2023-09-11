import Button from './ui/Button';

const Hero = () => {

  return (
    <section className="flex flex-col lg:flex-row relative">
      <div className="w-full lg:w-2/3 flex flex-col justify-center items-center">
        <div className="w-full lg:w-2/3 mx-auto text-center lg:text-left">
          <h1 className="mb-4 mt-10 font-monospace text-2xl lg:text-7xl text-black lg:leading-tight">
            Hi! My name is{' '}
            <span className="text-sky-600">Kevin Garcia</span> and I am a Software Engineer Student based in Puebla.
          </h1>
        </div>
        <div className="mb-4 mx-auto lg:mx-0 text-center lg:text-left">
          <Button
            text="About"
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-bar-to-down"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 20l16 0"></path>
                <path d="M12 14l0 -10"></path>
                <path d="M12 14l4 -4"></path>
                <path d="M12 14l-4 -4"></path>
              </svg>
            }
          />
        </div>
      </div>
      <div className="w-full lg:w-1/3 mt-4 lg:mt-0 relative">
        <img
          className="mx-auto lg:ml-0 drop-shadow-lg"
          src="/row2.png"
          width={550}
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
