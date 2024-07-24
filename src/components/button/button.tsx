/**
 * A simple element to allow click interaction.
 */
export const Button: React.FC<ButtonProperties> = ({
  onClickHandler,
  text,
}: ButtonProperties) => {
  return (
    <button className="btn btn-primary" onClick={onClickHandler} type="button">
      {text}
    </button>
  );
};

interface ButtonProperties {
  /**
   * Callback handler for a click event.
   * @param event The mouse event from the element.
   * @returns void
   */
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   * The content displayed in the button.
   */
  text: string;
}
