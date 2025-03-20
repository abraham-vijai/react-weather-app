interface ModalProps {
  heading: string;
  isModalOpen: boolean;
  closeModal: () => void;
  items: { label: string; onClick: () => void }[];
  style: React.CSSProperties;
}

/**
 * Component: Modal.tsx
 *
 * Description: A reusable modal component that displays a heading and a list of clickable items.
 * The modal can be closed by clicking outside of it or by interacting with its items.
 *
 * Props:
 * @param {string} heading - The heading/title of the modal.
 * @param {boolean} isModalOpen - Determines whether the modal is visible or hidden.
 * @param {() => void} closeModal - Function to handle closing the modal.
 * @param {{ label: string; onClick: () => void }[]} items - An array of items to display in the modal.
 * Each item has a `label` (text to display) and an `onClick` handler for click events.
 * @param {React.CSSProperties} style - Custom styles to apply to the modal container.
 *
 * Returns:
 * @returns {JSX.Element} - The rendered modal component.
 */
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
