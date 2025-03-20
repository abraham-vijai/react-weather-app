interface TextGroupProps {
  text: string;
}

/**
 * Component: TextGroup.tsx
 *
 * Description: A simple component that displays a block of text.
 *
 * Props:
 * @param {string} text - The text to display.
 *
 * Returns:
 * @returns {JSX.Element} - The rendered TextGroup component.
 */
const TextGroup = ({ text }: TextGroupProps) => {
  return <div>{text}</div>;
};

export default TextGroup;