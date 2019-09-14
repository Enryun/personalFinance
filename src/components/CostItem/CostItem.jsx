import React from 'react';
import {MdEdit, MdDelete} from 'react-icons/md';
import './CostItem.styles.scss';

const CostItem = ({expense, handleDelete, handleEdit}) => {

    const {id, costName, costAmount} = expense;
    
    return (
        <li className='item'>
            <div className='info'>
                <span className='expense'>{costName}</span>
                <span className='amount'>$ {costAmount}</span>
            </div>
            <div>
                <button className='edit-btn' 
                        aria-label='edit button'
                        onClick={() => handleEdit(id)} 
                        >
                    <MdEdit />
                </button>
                <button className='clear-btn' 
                        aria-label='delete button'
                        onClick={() => handleDelete(id)} 
                        >
                    <MdDelete />
                </button>
            </div>
        </li>
    )
}

export default CostItem
