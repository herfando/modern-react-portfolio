import React from 'react';

// Definisikan tipe props untuk komponen PopupUI
interface PopupUIProps {
  type: 'success' | 'error';
  onClose: () => void;
}

const PopupUI: React.FC<PopupUIProps> = ({ type, onClose }) => {
  const isSuccess = type === 'success';

  const imageSrc = isSuccess ? "./Message received.png" : "./Message not received.png";
  const imageAlt = isSuccess ? "message received" : "message not received";
  const title = isSuccess ? "Message Received!" : "Oops! Something went wrong.";
  const message = isSuccess
    ? "Thanks for reaching out — we’ll get back to you as soon as possible."
    : "We couldn’t send your message. Please try again or check your connection.";
  const buttonText = "Back to Home";

  return (
    <dialog
      open
      className="z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto items-center rounded-2xl grid grid-cols-1 place-items-center place-content-center"
    >
      <div className="max-[393px]:h-[160px] max-[393px]:w-[353px] rounded-t-3xl h-[225px] w-[518px] dark:bg-[#0A0D12] items-center grid place-items-center">
        <img className="mb-6 max-[393px]:h-[140px] max-[393px]:w-[140px]" src={imageSrc} alt={imageAlt} />
      </div>
      <div className="max-[393px]:h-[214px] max-[393px]:w-[353px] rounded-b-3xl bg-[#FFFFFF] dark:bg-[#000000] h-[254px] w-[518px] grid grid-cols-1 place-items-center place-content-center">
        <p className="w-[400px] max-[393px]:w-[305px] dark:text-[#FDFDFD] font-bold text-center max-[393px]:text-xl text-2xl">
          {title}
          <br />
          <span className="text-[#717680] font-medium text-xl max-[393px]:text-base">
            {message}
          </span>
        </p>
        <button
          onClick={onClose}
          className="text-[#FFFFFF] bg-[#FF623E] font-bold max-[393px]:w-[305px] w-[361px] h-[48px] rounded-full mt-10"
        >
          {buttonText}
        </button>
      </div>
    </dialog>
  );
};

export default PopupUI;