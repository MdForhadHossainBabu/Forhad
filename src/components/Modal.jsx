
import React from 'react';
import { LuPlay } from 'react-icons/lu';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


const OpenModal = () => {


   let subtitle;
   const [modalIsOpen, setIsOpen] = React.useState(false);

   function openModal() {
     setIsOpen(true);
   }

   function afterOpenModal() {
     // references are now sync'd and can be accessed.
     subtitle.style.color = '#00C0FF';
   }

   function closeModal() {
     setIsOpen(false);
   }
 return (
   <div>
     <button
       className=" p-2 rounded-full flex items-center justify-center bg-[#00C0FF]"
       onClick={openModal}
     >
       <LuPlay className="text-3xl" />
     </button>
     <Modal
       isOpen={modalIsOpen}
       onAfterOpen={afterOpenModal}
       onRequestClose={closeModal}
    style={customStyles}
   
       contentLabel="Example Modal"
     >
       <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
       <button onClick={closeModal}></button>
       <div className=''>
         <iframe
           className="w-full h-full"
           src="https://www.youtube.com/embed/z0n1aQ3IxWI?si=yga6WfsbuGXkqgv3"
           title="YouTube video player"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           allowfullscreen
         ></iframe>
       </div>
     </Modal>
   </div>
 );
};

export default OpenModal;