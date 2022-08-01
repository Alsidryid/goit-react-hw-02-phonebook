
import { nanoid } from 'nanoid';
import css from './ListContacts.module.css'
import PropTypes from 'prop-types';

export function ListContacts({contacts, deleteContact}){
    return(
        <ul className={css.list}>
        {contacts.map(({name,number,id}) =>{
        return (
             <li className={css.item} key={nanoid()}
             >
             <p className={css.text}>{name} : {number}</p>
             <button className={css.button} type="button" onClick={() => deleteContact(id)}>delete</button>
         </li>
            
        )
        
    })}
        </ul>
    )

}

ListContacts.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      })
    ),
    deleteContact: PropTypes.func.isRequired,
  };