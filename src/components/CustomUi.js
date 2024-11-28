export function CustomButton({
  children,
  onClick,
  className = "w-fit px-6",
  type = "button",
  buttonType = "primary",
}) {
  const buttonStyle = {
    primary: "bg-primary-500 text-utility-primary hover:bg-primary-600",
    secondary: "bg-primary-100 text-primary-600 hover:bg-primary-200",
  };

  const defaultClass = `btn min-h-0 rounded-full border-0 p-0 ${buttonStyle[buttonType] || ""}`;
  const customClass = `${defaultClass} ${className}`.trim();

  return (
    <button type={type} className={customClass} onClick={onClick}>
      {children}
    </button>
  );
}

export function CardImage({ children, className = "h-72 w-52" }) {
  const customClass =
    `overflow-hidden rounded-full  ${className}`.trim();

  return <div className={customClass}>{children}</div>;
}





export function ChatBubble({ children, type = "sender", className = "" }) {
  // กำหนด style ให้ตำแหน่ง chat
  const positionChat = {
    senderChat: {
      borderTopRightRadius: '2rem',
      borderBottomRightRadius: '2rem',
      borderTopLeftRadius: '2.2rem',
      borderBottomLeftRadius: '0rem',
    },
    receiverChat: {
      borderTopRightRadius: '2.2rem',
      borderBottomRightRadius: '0rem',
      borderTopLeftRadius: '2rem',
      borderBottomLeftRadius: '2rem',
    },
  };

  const customClass =`pt-3 pl-6 pb-3 pr-6 px-6 text-center w-fit ${className}`

  // เลือก style ตาม type
  const chatStyle =
    type === "sender"
      ? positionChat.senderChat
      : type === "receiver"
      ? positionChat.receiverChat
      : {};

  return (
    <div className="text-center">
      <div
        className={customClass}
        style={chatStyle}
      >
        <p>{children}</p>
      </div>
    </div>
  );
}




