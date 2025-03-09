export const Banner = () => {
  return (
    <div
      className="py-3 text-center"
      style={{
        background:
          "linear-gradient(to right, #FCD6FF 0%, #29D8FF 25%, #FFFD80 50%, #F89ABF 75%, #FCD6FF 100%)",
      }}
    >
      <div className="container">
        <p className="font-medium">
         <span className="hidden sm:inline">Introducing a completely redesigned interface - </span> 
          <a href="#" className="underline underline-offset-4 font-medium">
            Explore the Demo
          </a>
        </p>
      </div>
    </div>
  );
};
