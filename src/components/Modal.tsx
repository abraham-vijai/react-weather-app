import React from "react";

interface ModalProps {
  heading: string;
  isModalOpen: boolean;
  closeModal: () => void;
  items: { label: string; onClick: () => void }[];
}

const Modal = ({ heading, isModalOpen, closeModal, items }: ModalProps) => {
  return (
    <div
      style={{
        position: "fixed",
        visibility: isModalOpen ? "visible" : "hidden",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
