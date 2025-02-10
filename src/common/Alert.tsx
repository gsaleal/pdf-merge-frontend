import React from 'react';

type AlertProps = {
    message: string;
    type: 'error' | 'success';
};

const Alert: React.FC<AlertProps> = ({ message, type }) => {
    return (
        <div
            className={`p-4 mb-4 text-sm rounded-lg ${type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}
            role="alert"
        >
            {message}
        </div>
    );
};

export default Alert;
