import React from 'react';
import './menu-item.styles.scss';
import {withRouter} from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/crown.svg';

const MenuItem = ({title,imageUrl, size, history,linkUrl, match}) => (
    <div  className={`${size} menu-item`} onClick ={ () => history.push(`${match.url}${linkUrl}`)}
       >
        <div className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}   
        />
                <div className='content'>
                <Logo className='logo'></Logo>
                    <h1 className='title'>{title.toUpperCase()}</h1>
                    <span className='subtitle'>SHOP NOW</span>               
                </div>
            </div>
)

export default withRouter(MenuItem);