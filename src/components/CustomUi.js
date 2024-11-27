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

export function CardImage({ children, className = "h-72 w-48" }) {
  const customClass =
    `overflow-hidden rounded-full bg-red-500 ${className}`.trim();

  return <div className={customClass}>{children}</div>;
}