import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';

const Shop = () => {
    const dispatch = useDispatch();
    const actions = bindActionCreators(actionCreators, dispatch);
    return (
        <div className="container">
            <div className="container my-3">
                <button className="btn btn-primary mx-2" onClick={() => { actions.withdrawMoney(100) }}>-</button>
                Add items to Cart
                <button className="btn btn-primary mx-2" onClick={() => { actions.depositMoney(100) }}>+</button>
                {/* <button className="btn btn-primary mx-2" onClick={() => { dispatch(actionCreators.withdrawMoney(100)) }}>-</button>
                Add items to Cart
                <button className="btn btn-primary mx-2" onClick={() => { dispatch(actionCreators.depositMoney(100)) }}>+</button> */}
            </div>
        </div>
    )
}

export default Shop