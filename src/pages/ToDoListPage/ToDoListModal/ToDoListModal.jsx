import React from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { closeModal, deleteItem, changeNewText, addNewText } from "../../../store/actions"
import { Styled } from './ToDoListModal.styled';

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

export const ToDoListModal = () => {

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
        <Styled.Root>
          <Styled.Div>
            <Styled.Hedear>Do you want to {modalContent.text} this item ?</Styled.Hedear>
            <Styled.Button className='close' onClick={() => cancel()}>X</Styled.Button>
          </Styled.Div>
            {
              modalContent.text === "delete" ? <Styled.Span>{modalText}</Styled.Span> : 
              <Styled.TextArea id="" cols="20" rows="1" onChange={(e) => change(e.target.value)}>{modalText}</Styled.TextArea>
            }
          <Styled.Div>
            <Styled.Button2 onClick={() => removeItem(modalContent.index, modalContent.text)}>{modalContent.button}</Styled.Button2>
            <Styled.Button onClick={() => cancel() }>CANCEL</Styled.Button>
          </Styled.Div>
        </Styled.Root>
      </Modal>
    </div>
  );
}
