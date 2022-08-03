
import { nanoid } from 'nanoid';
import css from './ItemContact.module.css'

export function ItemContact({name,number,id,deleteContact}){
    return(
        <li className={css.item} key={nanoid()}
             >
             <p className={css.text}>{name} : {number}</p>
             <button className={css.button} type="button" onClick={() => deleteContact(id)}>delete</button>
         </li>
    )


}