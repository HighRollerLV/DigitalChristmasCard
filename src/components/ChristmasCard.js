import React from 'react';

const ChristmasCard = ({ email, message, handleFeedback }) => {
    return (
        <div className="flex flex-col items-center justify-evenly h-3/4">
            <p className="text-5xl lg:text-3xl font-semibold">
                To: <span className="font-bold">{email}</span>
            </p>
            <div className="flex flex-col items-center justify-center gap-4">
                <p className="text-6xl sm:text-6xl md:text-4xl lg:text-3xl font-semibold">
                    Christmas Card
                </p>
                <p className="text-center justify-center items-center w-5/6 sm:w-5/6 lg:w-9/12 xl:w-4/6 text-5xl sm:text-5xl md:text-3xl lg:text-2xl">
                    {message}
                </p>
            </div>
            <div className="mt-4 flex flex-col">
                <p className="text-6xl sm:text-6xl md:text-4xl lg:text-3xl">
                    Did you like the card?
                </p>
                <div className="flex flex-row gap-4 h-24 sm:h-24 md:h-16 lg:h-14 items-center justify-center text-center">
                    <button
                        className="bg-red-800 w-full hover:bg-red-900 text-white px-4 py-2 mt-4 font-bold text-4xl sm:text-4xl md:text-2xl lg:text-xl ease-in-out duration-300 shadow-2xl"
                        onClick={() => handleFeedback(true)}
                    >
                        Yes
                    </button>
                    <button
                        className="bg-red-800 w-full hover:bg-red-900 text-white px-4 py-2 mt-4 font-bold text-4xl sm:text-4xl md:text-2xl lg:text-xl ease-in-out duration-300 shadow-2xl"
                        onClick={() => handleFeedback(false)}
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChristmasCard;