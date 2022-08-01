import css from './FilterList.module.css'
import PropTypes from 'prop-types';


export function  FilterList({ filter, onChange }){
return(
    <label className={css.label}>Find contacts by name
        <input className={css.input} type="text"
                value={filter}
                onChange={onChange} />
    </label>
)
}

FilterList.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };