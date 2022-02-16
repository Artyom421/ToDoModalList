import React from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { closeModal, deleteItem, changeNewText, addNewText } from "../../../store/actions"

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

export function ToDoListModal() {

    const dispatch = useDispatch()
    const state = useSelector(( state ) => state)
    const { isModalOpen, modalText, modalContent, list, newModalText } = state

    const cancel = () => {
        dispatch(closeModal())
    }

    const change = (newText) => {
      dispatch(changeNewText(newText))
    }
    
    const removeItem = (index, text) => {
      if(text === "delete"){
        list.splice(index,1)
        dispatch(deleteItem(list))
        cancel()
      }
      else if(text === "edit"){
        const item = list[index]
        item.text = newModalText
        dispatch(addNewText(list))
        cancel()
      }
    }

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        style={customStyles}
      >
      <div>
        <button onClick={() => cancel()}>X</button>
        <h3>do you Want to {modalContent.text} this item</h3>
      </div>
        {
          modalContent.text === "delete" ? <span>{modalText}</span> : 
          <textarea id="" cols="30" rows="10" onChange={(e) => change(e.target.value)}>{modalText}</textarea>
        }
          <button onClick={() => removeItem(modalContent.index, modalContent.text)}>{modalContent.button}</button>
      <button onClick={() => cancel() }>CANCEL</button>

      </Modal>
    </div>
  );
}
