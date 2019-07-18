import React from 'react';
import { scaleRotate as Menu } from "react-burger-menu";
import ListElement from './ListElement/ListElement';

const list = (props) => {
    return (
        <div>
            <Menu pageWrapId={props.pageWrapId}
                outerContainerId={props.outerContainerId}
                width={200}
                customBurgerIcon={ <img src="img/icons-menu.png" class="bm-icon" alt="Not found"/>}
                >
                <div className="list">
                    <ul>
                        <li onClick={props.return}
                            className={props.classForListBtn}>Nazad</li>
                        <ListElement
                            elements={props.elements}
                            click={props.clicked}
                        />
                    </ul>
                </div>
            </Menu>
        </div>
    );
};      


export default list;