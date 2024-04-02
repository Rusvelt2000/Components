import Table from "../Components/Table";

function TablePage() {
  const config = [
    {
      label: "",
      render: (debtors) => (
        <img className="table-avatar" src={debtors.avatar} alt={debtors.name} />
      ),
    },
    { label: "Full name", render: (debtors) => debtors.name },
    { label: "Email address", render: (debtors) => debtors.email },
    { label: "Country", render: (debtors) => debtors.country },
    {
      label: "Amount",
      render: (debtors) => <div className="currency">{debtors.amount}</div>,
    },
  ];
  const debtors = [
    {
      id: 1,
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/720.jpg",
      name: "Frances Weissnat",
      email: "Tanya.Rempel@yahoo.com",
      country: "Austria",
      amount: "8.00",
    },
    {
      id: 2,
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/640.jpg",
      name: "Samantha Friesen",
      email: "Eleanor57@gmail.com",
      country: "Cameroon",
      amount: "119.00",
    },
    {
      id: 3,
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/522.jpg",
      name: "Justin Reinger",
      email: "Alejandro_Hartmann1@gmail.com",
      country: "French Guiana",
      amount: "862.00",
    },
    {
      id: 4,
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/967.jpg",
      name: "Helen Daugherty",
      email: "Kurt_Bauch57@yahoo.com",
      country: "Albania",
      amount: "525.00",
    },
    {
      id: 5,
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/123.jpg",
      name: "Jason Gulgowski",
      email: "Maureen_Leuschke29@gmail.com",
      country: "Saint Vincent and the Grenadines",
      amount: "336.00",
    },
    {
      id: 6,
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1061.jpg",
      name: "Laurie Ryan",
      email: "Lena99@yahoo.com",
      country: "Finland",
      amount: "928.00",
    },
    {
      id: 7,
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/803.jpg",
      name: "Delores Reilly",
      email: "Philip70@hotmail.com",
      country: "Antigua and Barbuda",
      amount: "924.00",
    },
    {
      id: 8,
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/640.jpg",
      name: "Phil Kautzer",
      email: "Tanya65@gmail.com",
      country: "Paraguay",
      amount: "904.00",
    },
    {
      id: 9,
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1223.jpg",
      name: "Dr. Melanie Wiza III",
      email: "Glenn.Gleason59@hotmail.com",
      country: "Saint Barthelemy",
      amount: "312.00",
    },
    {
      id: 10,
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/380.jpg",
      name: "Donna Bednar",
      email: "Jack_Harber13@gmail.com",
      country: "Monaco",
      amount: "350.00",
    },
  ];

  const totalAmount = debtors.reduce((total, debtor) => {
    return total + Number(debtor.amount);
  }, 0);

  return (
    <div>
      <h2 className="section-title">Tables</h2>
      <Table data={debtors} config={config} total={totalAmount.toFixed(2)} />
    </div>
  );
}
export default TablePage;
