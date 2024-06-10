import React, { useEffect, useState } from 'react';

const NoSpeak = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count < 1000) {
            const interval = setInterval(() => {
                setCount(prevCount => prevCount + 1);
            }, 20); // Adjust the interval speed here
            return () => clearInterval(interval);
        }
    }, [count]);

    const [countStudent, setCountStudent] = useState(3000);

    useEffect(() => {
        if (countStudent < 4500) {
            const interval = setInterval(() => {
                setCountStudent(prevCount => prevCount + 1);
            }, 20); // Adjust the interval speed here
            return () => clearInterval(interval);
        }
    }, [countStudent]);

    const [countSupporter, setCountSupporter] = useState(60000);

    useEffect(() => {
        if (countSupporter < 88000) {
            const interval = setInterval(() => {
                setCountSupporter(prevCount => prevCount + 1);
            }, 20); // Adjust the interval speed here
            return () => clearInterval(interval);
        }
    }, [countSupporter]);

    return (
        // <div className="bg-cover bg-center bg-fixed text-white py-16" style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2024/01/06/02/44/ai-generated-8490532_640.png)' }}>

        <div className="bg-cover bg-center bg-fixed text-white py-16" style={{ backgroundImage: 'url(https://tradextbm.com/wp-content/uploads/2024/01/bg-08-free-img.jpg)' }}>
            <div className="py-16">
            {/* bg-black bg-opacity-60 */}
                <div className="container mx-auto text-center">
                    <h2 className="text-5xl font-bold mb-6">Numbers <span className="text-[#FFAA33]">Speak for themselves</span></h2>
                    <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 ">
                        <div>
                            <p className="text-5xl font-bold text-[#FFAA33]">{countStudent}+</p>
                            <p className="text-xl">Students Trained</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold text-[#FFAA33]">{count}+</p>
                            <p className="text-xl">Happy Reviews</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold text-[#FFAA33]">{countSupporter}+</p>
                            <p className="text-xl">Supporters</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoSpeak;


