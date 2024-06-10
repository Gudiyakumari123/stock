

export default function Login() {
    return (
        <div className="relative mb-5 isolate overflow-hidden sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-5 animate-move-background"
                style={{ backgroundImage: "url('https://novally-app.netlify.app/img/crypto.47e71167.png')" }} />
            <div className="relative flex w-full flex-col items-center justify-center gap-6 px-4 pb-16 pt-6 sm:px-6 ">
                <div className='w-full max-w-[440px] bg-white dark:bg-[#161616]  rounded-xl lg:mt-16 p-10' >
                    <form className="space-y-1 dark:text-white h-full rounded-xl ">
                        <h1 className="text-2xl  font-bold flex justify-center  !leading-snug text-black md:text-2xl text-center">

                        </h1>
                        <h1 className='text-2xl mt-1 font-bold flex justify-center  !leading-snug text-[#FFAA33]  md:text-2xl text-center' >Welcome Back</h1>
                        <p className=' flex justify-center text-green-700  ' >Please Login to continue Learning </p>


                        <div >
                            <input type="password" placeholder='Email Id' className="w-full rounded-lg  bg-[#F2F2F2] px-4 py-2 mt-2 text-xs font-normal  text-black mb-1 " />
                        </div>
                        <div >
                            <input type="password" placeholder='Password' className="w-full rounded-lg  bg-[#F2F2F2] px-4 py-2 text-xs focus font-normal text-black mb-1 " />
                        </div>
                        <button type="button"  className="btn font-extrabold shadow-none bg-gradient-to-r from-[#FFAA33] to-[#fff] text-green-800  w-full rounded-lg border-0 !mt-2 ">
                            Login
                        </button>




                    </form>
                </div>
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




