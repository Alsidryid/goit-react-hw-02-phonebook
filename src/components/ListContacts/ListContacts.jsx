
import css from './ListContacts.module.css'
import PropTypes from 'prop-types';
import { ItemContact } from 'components/ItemContact/ItemContact';

export function ListContacts({contacts, deleteContact}){
    return(
        <ul className={css.list}>
        {contacts.map(({name,number,id}) =>{
        return (
             <ItemContact
           
             name={name}
             number={number}
             id={id}
             deleteContact={deleteContact}/>
        
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