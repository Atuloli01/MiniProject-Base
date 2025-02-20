const Overlay = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${
        isOpen ? "block" : "hidden"
      }`}
      onClick={onClose}
    ></div>
  );
};

export default Overlay;
