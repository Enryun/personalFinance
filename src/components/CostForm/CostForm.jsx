import React from 'react';
import {MdSend} from 'react-icons/md';
import './CostForm.styles.scss';

const CostForm = ({costAmount, costName, handleAmount, handleCost, handleSubmit, edit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className='form-center'>
                <div className='form-group'>
                    <label htmlFor='cost'>
                        cost
                    </label>
                    <input 
                        type='text' 
                        placeholder='ex: rent' 
                        id='cost' 
                        className='form-control'
                        autoComplete='off'
                        value={costName}
                        onChange={handleCost}
                    />
                </div>    
               
                <div className='form-group'>
                    <label htmlFor='amount'>
                        amount $:
                    </label>
                    <input 
                        type='number' 
                        placeholder='ex: 100' 
                        id='amount'
                        className='form-control'
                        autoComplete='off'
                        value={costAmount}
                        onChange={handleAmount}
                    />
                </div>
                        
            </div>

            <button type='submit' className='btn'>
                {edit ? 'edit' : 'submit'}
                <MdSend className='btn-icon' />
            </button>
        </form>
    )
}

export default CostForm
