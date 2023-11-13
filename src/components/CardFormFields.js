import React from 'react';

const CardFormFields = ({email, setEmail, message, setMessage, handleSubmit}) => {
    return (
        <form className="text-center mt-6" onSubmit={handleSubmit}>
            <label htmlFor="email"
                   className="block text-red-800 text-2xl lg:text-xl font-bold mb-2 text-left">Recipient
                Email</label>
            <input type="email" id="email" name="email" value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   className="text-3xl lg:text-xl w-[34rem] h-16 md:w-[29rem] lg:h-12 xl:h-10 border-neutral-500 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                   required/>

            <label htmlFor="message"
                   className="block text-red-800 text-2xl lg:text-xl font-bold mb-2 mt-4 text-left">Custom
                Message</label>
            <textarea id="message" name="message" value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="text-3xl lg:text-xl w-full h-32 lg:h-20 xl:h-24 border-neutral-500 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required></textarea>

            <button type="submit"
                    className="bg-red-800 w-full hover:bg-red-900 text-white px-4 py-2 rounded mt-4 font-bold text-2xl ease-in-out duration-300 shadow-2xl">Send
                Card
            </button>
        </form>
    );
};

export default CardFormFields;