function Table({ data }) {
  const renderedData = data.map((debtor) => {
    return (
      <tr key={debtor.id}>
        <td>
          <img src={debtor.avatar} className="table-color" />
        </td>
        <td>{debtor.name}</td>
        <td>{debtor.email}</td>
        <td>{debtor.country}</td>
        <td className="currency">${debtor.amount}</td>
      </tr>
    );
  });

  return (
    <table className="Table" cellSpacing={0}>
      <thead>
        <tr>
          <th colSpan={2}>Name</th>

          <th>Email</th>
          <th>Country</th>
          <th align="right">Amount</th>
        </tr>
      </thead>
      <tbody>{renderedData}</tbody>
    </table>
  );
}

export default Table;
