import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({items}) => (
  <table className={css.transactionHistory}>
    <thead className={css.hederTable}>
      <tr className={css.rowTable}>
        <th className={css.columnTable}>Type</th>
        <th className={css.columnTable}>Amount</th>
        <th className={css.columnTable}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <tr key={item.id} className={css.rowTable}>
          <td className={css.transaction}>{item.type}</td>
          <td className={css.transaction}>{item.amount}</td>
          <td className={css.transaction}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.protoType = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.number.isRequired,
    })
  ).isRequired,
};
