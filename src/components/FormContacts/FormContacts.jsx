import React from 'react';
import PropTypes from 'prop-types';
import css from './FormContacts.module.css'

class FormContacts extends React.Component{
    state = {
        name: '',
        number: '',
      };

      static propTypes = {
        onSubmit: PropTypes.func.isRequired,
      };
      
      submitForm = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
      };

      changeForm = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
      };

 

      reset = () => {
        this.setState({ name: '', number: '' });
      };

      render(){
        return(
            <form className={css.form} onSubmit={this.submitForm}>
              <label className={css.label}> Name
        <input
        className={css.input}
  type="text"
  name="name"
  value={this.state.name}
  onChange={this.changeForm}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
</label>
 <label className={css.label} > Number
  <input
  className={css.input}
 type="tel"
 name="number"
 value={this.state.number}
 onChange={this.changeForm}
 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
 required
/>
</label>
<button  className={css.button} type="submit">Add contact</button>
</form>
) }}

export default FormContacts;