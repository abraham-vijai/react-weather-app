import React from "react";

interface SidebarProps {
  children: React.ReactNode;
  isSidebarOpen: boolean;
  closeSidebar: () => void;
  style?: React.CSSProperties;
}
/**
 * Component: Sidebar.tsx
 *
 * Description: A reusable Sidebar component that displays a heading and a list of clickable items.
 * The Sidebar can be closed by clicking outside of it or by interacting with its items.
 *
 * Props:
 * @param {boolean} isSidebarOpen - Determines whether the Sidebar is visible or hidden.
 * @param {() => void} closeSidebar - Function to handle closing the Sidebar.
 * @param {{ label: string; onClick: () => void }[]} items - An array of items to display in the Sidebar.
 * Each item has a `label` (text to display) and an `onClick` handler for click events.
 * @param {React.CSSProperties} style - Custom styles to apply to the Sidebar container.
 *
 * Returns:
 * @returns {JSX.Element} - The rendered Sidebar component.
 */
const Sidebar = ({ children, isSidebarOpen, closeSidebar, style }: SidebarProps) => {
  return (
    <div
      style={{
        visibility: isSidebarOpen ? "visible" : "hidden",
        opacity: isSidebarOpen ? 1 : 0,
        ...style,
      }}
      onClick={closeSidebar}
    >
      {children}
    </div>
  );
};

export default Sidebar;