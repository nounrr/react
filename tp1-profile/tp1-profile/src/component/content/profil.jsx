import React from 'react'
import prfImg from '../../images/profile.png'
function Profile() {
  return (
    <div className='profile'>
        <div className='prfImg'>
        <img width="50%" src={prfImg} alt='' />
        </div>
            <div className='description'>
                <h1>Mohamed Nour</h1>
                <h2>Web Developer</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum minima ipsa animi. Iure tempore magni enim ratione fuga odio, reiciendis ullam maxime dicta, quo doloribus vitae! Commodi qui aut veniam!</p>
            </div>
    </div>
  )
}

export default Profile