interface TextGroupProps {
  text: string;
}

const TextGroup = ({ text }: TextGroupProps) => {
  return <div>{text}</div>;
};

export default TextGroup;
