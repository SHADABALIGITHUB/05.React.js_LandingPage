import React from 'react';
import { FaStar } from 'react-icons/fa';
const FaqCard = () => {
    return (
        <div className="flex items-start space-x-4">
        <FaStar className="text-customRed w-6 h-6 mt-1" />
        <div>
            <h3 className="text-lg font-bold">The Best Financial Account </h3>
            <p className="text-gray-500">
                "Arcu At Dictum Sapien,MCum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Elit Mauris.
            </p>
        </div>
      </div>
    );
}

export default FaqCard;
