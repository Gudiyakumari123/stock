
export default function Home2() {
  return (
    <div className="relative mb-5 isolate overflow-hidden sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
      <div className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-5 animate-move-background"
        style={{ backgroundImage: "url('https://novally-app.netlify.app/img/crypto.47e71167.png')" }} />
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        aria-hidden="true"
      >
        <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#7775D6" />
            <stop offset={1} stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <div className="relative mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Boost Trading Knowledge.
          <br />
          To create
          <span className="text-indigo-500 ml-2 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
            <ul className="block animate-text-slide-5 text-left leading-tight [&_li]:block">
              <li>Money</li>
              <li>Money</li>
              <li>Money</li>
              <li aria-hidden="true">Money</li>
            </ul>
          </span>.
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Only 3% of Indians invest in the stock market. Our mission is to empower everyone with financial literacy and achieve financial freedom for all!
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
          <button
            style={{
              backgroundImage: "linear-gradient(130deg, #FFAA33, #ffff 50%, #ffff)",
              boxShadow: '0 3px 20px rgba(0, 0, 0, .1)',
              textTransform: 'uppercase',
              position: 'relative',
              minWidth: '160px',
              height: '40px',
              padding: '0 20px',
              fontWeight: '600',
              border: 'none',
              letterSpacing: '1px',
              display: 'inline-block',
              backgroundSize: '200% auto',
              color: 'black',
              borderRadius: '10px',
              transition: 'all .5s',
            }}
            className="font-bold py-2 px-4 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            Get started
          </button>
          <button
            style={{
              backgroundImage: "linear-gradient(130deg, #eb3fa9, #395ff6 50%, #eb3fa9)",
              boxShadow: '0 3px 20px rgba(0, 0, 0, .1)',
              textTransform: 'uppercase',
              position: 'relative',
              minWidth: '160px',
              height: '40px',
              padding: '0 20px',
              fontWeight: '600',
              border: 'none',
              letterSpacing: '1px',
              display: 'inline-block',
              backgroundSize: '200% auto',
              color: '#fff',
              borderRadius: '10px',
              transition: 'all .5s',
            }}
            className="font-bold py-2 px-4 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="relative flex justify-center lg:justify-end lg:items-center lg:flex-1 lg:h-full">
      <img src="/bg.png" alt="" />
        {/* <div className="relative h-96 w-96 overflow-hidden rounded-lg mt-10 animate-image-slide">
          <img src="/bg.png" alt="Image 1" className="absolute inset-0 w-full h-full object-cover" />
          <img src="https://novally-app.netlify.app/img/header-1.d0501e9d.jpg" alt="Image 1" className="absolute inset-0 w-full h-full object-cover" />
          <img src="https://thetork.com/demos/html/bitrader/assets/images/banner/home4/2.png" alt="Image 2" className="absolute inset-0 w-full h-full object-cover" />
          <img src="data:image/png;base64,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" alt="Image 3" className="absolute inset-0 w-full h-full object-cover" />
          <img src="data:image/jpeg;base64,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" alt="Image 4" className="absolute inset-0 w-full h-full object-cover" />
        </div> */}
      </div>
      <style jsx>{`
        .animate-move-background {
          animation: move-background 20s linear infinite;
        }

        @keyframes move-background {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 100% 0;
          }
        }

        .animate-text-slide-5 {
          animation: text-slide 5s infinite linear;
        }

        @keyframes text-slide {
          0% {
            transform: translateY(0);
          }
          20% {
            transform: translateY(-100%);
          }
          40% {
            transform: translateY(-200%);
          }
          60% {
            transform: translateY(-300%);
          }
          80% {
            transform: translateY(-400%);
          }
          100% {
            transform: translateY(-100%);
          }
        }

        .animate-image-slide img {
          animation: image-slide 16s infinite;
        }

        @keyframes image-slide {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          25% {
            opacity: 0;
            transform: scale(1.05);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
          75% {
            opacity: 0;
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-image-slide img:nth-child(1) {
          animation-delay: 0s;
        }

        .animate-image-slide img:nth-child(2) {
          animation-delay: 4s;
        }

        .animate-image-slide img:nth-child(3) {
          animation-delay: 8s;
        }

        .animate-image-slide img:nth-child(4) {
          animation-delay: 12s;
        }
      `}</style>
    </div>
  );
}

