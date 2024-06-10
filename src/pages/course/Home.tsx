export default function Home() {

    return (
        <div className="relative  mb-5 isolate overflow-hidden bg-gray-900  shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
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
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="text-3xl font-bold  tracking-tight text-white sm:text-4xl">
            Boost  Trading Knowledge.
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
            {/* In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual. */}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <button className="bg-white text-black font-bold py-2 px-4 rounded-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            Get started
    </button>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="relative mt-16 h-80 lg:mt-8">
       
          <img
            className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
          
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
            
            
            
            alt="App screenshot"
            width={1824}
            height={1080}
          />
        </div>
        {/* <div className="md:w-1/2 flex flex-wrap justify-center md:justify-end mt-8 md:mt-0 space-y-4 md:space-y-0 md:space-x-4">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Image ${index + 1}`} className="w-32 h-32  rounded-lg shadow-md md:w-36 md:h-36 lg:w-48 lg:h-48 m-2" />
        ))}
      </div> */}
      </div>
    )
  }
  