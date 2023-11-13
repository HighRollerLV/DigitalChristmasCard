import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import emailjs from 'emailjs-com';
import CardFormFields from "./CardFormFields";

const CardForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (message.length < 50 || message.length > 500) {
            setAlertMessage("Your message must be between 50 and 500 characters.");
            setTimeout(() => setAlertMessage(''), 3000);
            return;
        }

        let templateParams = {
            to_name: email,
            to_email: email,
            message: message,
        }

        emailjs.send('service_kqvbhwe', 'template_r9agsag', templateParams, '_T2f2T8HKD2kB9jU3')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                navigate(`/card?email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`);
            }, (err) => {
                console.log('FAILED...', err);
            });
    };

    return (
        <div className="flex flex-col justify-center items-center w-screen h-full">
            <img src="/img/ChristmasBowTie.png" alt="Christmas Bow Tie"
                 className="absolute z-10 top-28 h-fit w-fit sm:h-1/4"/>
            <div
                className="PostCard flex flex-col items-center justify-center candy-cane-border w-full h-2/5 md:w-[97%] md:h-3/4 xl:w-8/12 xl:h-3/4">
                <div
                    className="flex flex-row items-center justify-center bg-gradient-to-r from-neutral-50 to-neutral-100 border-white w-[95%] h-[96%] lg:w-[97%]">
                    <CardFormFields
                        email={email}
                        setEmail={setEmail}
                        message={message}
                        setMessage={setMessage}
                        handleSubmit={handleSubmit}
                    />
                </div>
            </div>
            {alertMessage &&
                <div
                    className="absolute px-4 py-2 rounded font-bold text-5xl lg:text-2xl ease-in-out duration-500 shadow-2xl h-36 lg:h-20 text-center items-center justify-center flex flex-col candy-cane-border">
                    <div
                        className="bg-neutral-100 h-28 lg:h-16 text-center items-center justify-center flex flex-col px-4">
                        <p className="text-neutral-950">{alertMessage}</p>
                    </div>
                </div>
            }
        </div>
    );
};

export default CardForm;