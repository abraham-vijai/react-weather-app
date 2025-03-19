interface ModalProps {
  heading: string;
  isModalOpen: boolean;
  closeModal: () => void;
  items: { label: string; onClick: () => void }[];
  style: React.CSSProperties;
}

const Modal = ({
  heading,
  isModalOpen,
  closeModal,
  items,
  style,
}: ModalProps) => {
  return (
    <div
      style={{
        visibility: isModalOpen ? "visible" : "hidden",

        ...style,
      }}
      onClick={closeModal}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "300px",
          color: "black",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{heading}</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {items.map((item, index) => (
            <li
              key={index}
              style={{ padding: "10px 0", cursor: "pointer" }}
              onClick={item.onClick}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
