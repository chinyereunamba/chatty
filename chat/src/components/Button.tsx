type ButtonProps = {
  buttonLabel: string;
  handleClick?: () => void;
};
export const FormButton = ({ buttonLabel, handleClick }: ButtonProps) => {
  return (
    <button
      type="submit"
      onClick={handleClick}
      className="p-2.5 bg-teal-900 hover:bg-teal-900/70 transition-colors rounded-md w-full"
    >
      {buttonLabel}
    </button>
  );
};
