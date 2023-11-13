import React from 'react';
import CardForm from './CardForm';

const LandingPage = () => {
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const handleFormSubmit = (email, message) => {
        setEmail(email);
        setMessage(message);
        setIsSubmitted(true);
    };

    return (
        <div className="flex flex-col items-center justify-start h-screen bg-cover bg-center"
             style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/christmas_bg.jpg)`}}>
            <h1 className="text-6xl font-bold mt-4 text-white shadow-2xl">Digital Christmas Card</h1>
            <div className="flex flex-col items-center justify-center h-screen">
                <CardForm onFormSubmit={handleFormSubmit}/>
            </div>
            {isSubmitted && (
                <div className="text-center mt-6">
                    <h2 className="text-2xl font-bold mb-2">Recipient Email:</h2>
                    <p className="text-lg mb-4">{email}</p>
                    <h2 className="text-2xl font-bold mb-2">Custom Message:</h2>
                    <p className="text-lg mb-4">{message}</p>
                </div>
            )}
        </div>
    );
};

export default LandingPage;