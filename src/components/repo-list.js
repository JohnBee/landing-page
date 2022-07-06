import React from 'react';
import GHmark from "../images/GitHub-Mark-Light-120px-plus.png";
function ListItem(props){
    return(
        <tbody>
            <tr>
                <td className="ListDiv">
                    <a className="ListLink" href={props.link}>
                        <span className='Hbackground'>
                            {props.name}
                        </span>
                    </a>
                </td>
                <td>
                    <a href={props.repo}>
                        <img className="ListGHmark" src={GHmark} alt="GHmark"></img>
                    </a>
                </td>
            </tr>
        </tbody>
    );
}

export function Repolist(props){
    return (
        <div className="Repolist">
            <table className="ItemList">
                {
                    props.items.map((x, index) =>
                            <ListItem key={index} name={x.name} link={x.link} repo={x.repo}/>
                    )
                }
            </table>
        </div>
    );
}
