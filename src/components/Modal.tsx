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
          backgroundColor: "rgba(193, 185, 185, 0.7)",
          padding: "20px",
          borderRadius: "10px",
          width: "80%",
          height: "90%",
          color: "black",
          fontSize: "1.5rem",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{heading}</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {items.map((item, index) => (
            <li
              key={index}
              style={{ padding: 10, cursor: "pointer" }}
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
