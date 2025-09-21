import React from 'react';

// This interface defines the expected props for the `PopupUI` component.
// `type` is a union type that restricts the value to either 'success' or 'error'.
// `onClose` is a function that will be called when the popup needs to be closed.
interface PopupUIProps {
  type: 'success' | 'error';
  onClose: () => void;
}

const PopupUI: React.FC<PopupUIProps> = ({ type, onClose }) => {
  // A boolean flag to simplify conditional logic within the component.
  const isSuccess = type === 'success';

  // Dynamic content based on the `type` prop. This centralizes all conditional text and image logic.
  const imageSrc = isSuccess ? "./UI_Popup_message_received.png" : "./UI_Popup_message_not_received.png";
  const imageAlt = isSuccess ? "message received" : "message not received";
  const title = isSuccess ? "Message Received!" : "Oops! Something went wrong.";
  const message = isSuccess
    ? "Thanks for reaching out — we’ll get back to you as soon as possible."
    : "We couldn’t send your message. Please try again or check your connection.";
  const buttonText = "Back to Home";

  return (
    // The `<dialog>` element is used for semantic correctness, as it represents a dialog box or other interactive component.
    // The `open` attribute ensures the dialog is displayed.
    <dialog
      open
      className="z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto items-center rounded-2xl grid grid-cols-1 place-items-center place-content-center"
    >
      {/* Top section of the popup, containing the image. */}
      <div className="max-[393px]:h-[160px] max-[393px]:w-[353px] rounded-t-3xl h-[225px] w-[518px] dark:bg-[#0A0D12] items-center grid place-items-center">
        {/* The image source and alt text are dynamically set based on the `type` prop. */}
        <img className="mb-6 max-[393px]:h-[140px] max-[393px]:w-[140px]" src={imageSrc} alt={imageAlt} />
      </div>
      {/* Bottom section of the popup, containing the text and button. */}
      <div className="max-[393px]:h-[214px] max-[393px]:w-[353px] rounded-b-3xl bg-[#FFFFFF] dark:bg-[#000000] h-[254px] w-[518px] grid grid-cols-1 place-items-center place-content-center">
        <p className="w-[400px] max-[393px]:w-[305px] dark:text-[#FDFDFD] font-bold text-center max-[393px]:text-xl text-2xl">
          {/* The title and message are dynamically set. */}
          {title}
          <br />
          <span className="text-[#717680] font-medium text-xl max-[393px]:text-base">
            {message}
          </span>
        </p>
        <button
          // The `onClose` prop is a callback function that handles the closing logic in the parent component.
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