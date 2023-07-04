import css from './statics.module.css';
import PropTypes from 'prop-types';
 import { getRandomColor } from './color'

export function Statistics ({title, data}) {
    return  <section className={css.statistics}>
    <h2 className={css.title}>Upload stats</h2>
  
    <ul className={css.statsList}>
    {data.map(el => {
    return <li key ={el.id} className={css.item} style={{backgroundColor: getRandomColor()}} >
    <p className={css.label}>{el.label}</p>
    <p className={css.percentage}>{el.percentage}</p>
  </li> })}
    </ul>
  </section> 
}

Statistics.propTypes = {
    data: PropTypes.array.isRequired,
  }

