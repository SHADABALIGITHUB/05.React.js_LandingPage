import React from 'react';
import { FaStar } from 'react-icons/fa';
const FaqCard = (props) => {
    return (
        <div className={`flex items-start space-x-4 ${props.bgColor} rounded-2xl md:p-3 p-1`}>
        <FaStar className={`${props.TextColor} w-6 h-6 mt-1`} />
        <div>
            <h3 className={`text-lg font-bold ${props.TextColor}`}>The Best Financial Account </h3>
            <p className={`${props.TextColor}`}>
                "Arcu At Dictum Sapien,MCum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Elit Mauris.
            </p>
        </div>
      </div>
    );
}

export default FaqCard;
