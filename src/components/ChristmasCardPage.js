import React, {useState} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import ChristmasCard from "./ChristmasCard";

const ChristmasCardPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const email = params.get('email');
    const message = params.get('message');
    const [showAlert, setShowAlert] = useState(false);

    const handleFeedback = (liked) => {
        if (liked) {
            navigate('/');
        } else {
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 3000);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen bg-cover bg-center"
             style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/christmas_bg.jpg)`}}>
            <img src="/img/ChristmasBowTie.png" alt="Christmas Bow Tie"
                 className="absolute z-20 top-8 h-fit w-fit sm:h-1/4"/>
            <img src="/img/Stamp.png" alt="Christmas Bow Tie"
                 className="absolute z-10 top-80 md:top-36 right-8 h-44 hidden lg:flex xl:right-96"/>
            <div
                className="PostCard flex flex-col items-center justify-center candy-cane-border w-full h-2/5 md:w-[97%] md:h-3/4 xl:w-8/12 xl:h-3/4">
                <div
                    className="flex flex-col items-center justify-evenly bg-gradient-to-r from-neutral-50 to-neutral-100 border-white w-[95%] h-[96%] lg:w-[97%]">
                    <ChristmasCard email={email} message={message} handleFeedback={handleFeedback} />
                </div>
            </div>
            {showAlert &&
                <div
                    className="absolute px-4 py-2 rounded font-bold text-5xl lg:text-2xl ease-in-out duration-500 shadow-2xl h-36 lg:h-20 text-center items-center justify-center flex flex-col candy-cane-border">
                    <div
                        className="bg-neutral-100 h-28 lg:h-16 text-center items-center justify-center flex flex-col px-4">
                        <p className="text-neutral-950">We are sad to hear that you did not enjoy your Christmas
                            card!</p>
                    </div>
                </div>
            }
        </div>
    );
};

export default ChristmasCardPage;