import React from 'react'
import { Link } from 'react-router-dom';
import { TfiFaceSad, TfiFaceSmile } from 'react-icons/tfi';

function index() {
  return (
    <div className='Main'>
        <div className='Main-cont'>
            <div className='Main-logo'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {/* <div className='Main-logo-1'></div>
                <div className='Main-logo-2'></div>
                <div className='Main-logo-3'></div>
                <div className='Main-logo-4'></div> */}
            </div>
            <div className='Main-nav'>
                {/* <Link to='/CPU/index.js'>
                    <p>play vs cpu</p>
                    <span><TfiFaceSmile /><TfiFaceSad /></span>
                </Link> */}
                <Link to='/Player/Player.js'>
                    <p>play</p>
                    <span><TfiFaceSmile /><TfiFaceSmile /></span>
                </Link>
                <Link to='/Rules/index.js'>
                    <p>game rules</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default index