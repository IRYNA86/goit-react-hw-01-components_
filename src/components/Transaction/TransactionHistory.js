import PropTypes from 'prop-types';
import css from '../Transaction/TransactionHistory.module.css'

function TransactionHistory({ items }) {
  return (
    <table className={css.transaction_history}>
      <thead>
        <tr>
          <th className={css.table_header}>Type</th>
          <th className={css.table_header}>Amount</th>
          <th className={css.table_header}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr className={css.table_row} key={item.id}>
            <td className={css.table_data}>{item.type}</td>
            <td className={css.table_data}>{item.amount}</td>
            <td className={css.table_data}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  )
}

export default TransactionHistory;
