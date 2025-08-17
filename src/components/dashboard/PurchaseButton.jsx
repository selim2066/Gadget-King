import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContexts } from "../../context/CartContext";

export default function PurchaseButton() {
  const [openModal, setOpenModal] = useState(false);
 const navigate = useNavigate();
 const {cart}=useContext( CartContexts)
 
 
 console.log(cart)

  const handleHome = () => {
    navigate("/"); 
  };

  return (
    <>
      <button className="btn rounded-4xl" onClick={() => setOpenModal(true)}>
        Purchase
      </button>

      {openModal && (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <div className="flex flex-col items-center pt-5">
              <h3 className="font-bold text-lg text-center">
                <img src="../../../public/assets/Group.png" alt="" />
              </h3>
              <p className="py-4">Purchase Successfully Done</p>
            </div>
            <div className="modal-action">
              <button
                className="btn"
                onClick={() => {
                  setOpenModal(false);
                  handleHome();
                }}
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
