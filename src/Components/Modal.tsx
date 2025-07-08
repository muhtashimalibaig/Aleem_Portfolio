import { X } from "lucide-react";
interface IModal {
  source: string;
  onClose: () => void;
}
const Modal: React.FC<IModal> = ({ source, onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}>
      <div
        style={{
          //   backgroundColor: "#fff",
          borderRadius: "10px",
        }}>
        <button
          className='bg-[#3768E1] hover:bg-blue-700'
          onClick={onClose}
          style={{
            position: "absolute",
            padding: "20px",
            top: 10,
            right: 30,
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}>
          <X />
        </button>
        <video
          src={source}
          controls
          autoPlay
          muted
          style={{ maxWidth: "100%", borderRadius: "8px" }}></video>
      </div>
    </div>
  );
};
export default Modal;
