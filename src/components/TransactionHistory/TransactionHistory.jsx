import PropTypes from "prop-types";
import { Table, Header, Data } from "./TransactionHistory.styled";
import { makeFirstLetter, tableRowsBackgroundColor } from "constants/helper";

export default function TransactionHistory({items}) {
    return (
        <Table>
  <thead>
    <tr>
      <Header>Type</Header>
      <Header>Amount</Header>
      <Header>Currency</Header>
    </tr>
  </thead>

    <tbody>
    {items.map((item, index) => (
                    
    <tr key={item.id} style={{ backgroundColor: tableRowsBackgroundColor(index) }}>
    <Data>{makeFirstLetter(item.type)}</Data>
    <Data>{item.amount}</Data>
    <Data>{item.currency}</Data>
    </tr>
    ))}
  
  </tbody>
</Table>
    )

    
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired
        })
    )
}