import SortableTable from "../Components/SortableTable";
import Title from "../Components/Title";
import Container from "../Components/Container";
import { ImAddressBook } from "react-icons/im";
import { AiFillCar } from "react-icons/ai";

function TablePage() {
  const config = [
    {
      label: "Name",
      render: (debtors) => (
        <div className="table-avatar">
          <img src={debtors.avatar} alt={debtors.name} />
          {debtors.name}
        </div>
      ),
      sortableValue: (debtors) => debtors.name,
    },
    { label: "Email address", render: (debtors) => debtors.email },
    { label: "Country", render: (debtors) => debtors.country },
    {
      label: "Amount",
      render: (debtors) => (
        <div
          className="currency"
          style={
            debtors.amount < 0 ? { color: "#f55260" } : { color: "#38c138" }
          }
        >
          $ {debtors.amount}
        </div>
      ),
      sortableValue: (debtors) => debtors.amount,
    },
  ];

  const debtors = [
    {
      id: 1,
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/720.jpg",
      name: "Frances Weiss",
      email: "Tanya.Rempel@yahoo.com",
      country: "Austria",
      amount: "8.00",
    },
    {
      id: 2,
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/640.jpg",
      name: "Samantha Greisen",
      email: "Eleanor57@gmail.com",
      country: "Cameroon",
      amount: "-119.00",
    },
    {
      id: 3,
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/522.jpg",
      name: "Justin Reinter",
      email: "Alejandro_Hartmann1@gmail.com",
      country: "French Guiana",
      amount: "-862.00",
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
      name: "Jason Huey",
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
      amount: "-924.00",
    },
    {
      id: 8,
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/640.jpg",
      name: "Phil Klutzes",
      email: "Tanya65@gmail.com",
      country: "Paraguay",
      amount: "904.00",
    },
    {
      id: 9,
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1223.jpg",
      name: "Dr. Melanie Liza III",
      email: "Glenn.Gleason59@hotmail.com",
      country: "Saint Bels",
      amount: "312.00",
    },
    {
      id: 10,
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/380.jpg",
      name: "Donna Bender",
      email: "Jack_Harber13@gmail.com",
      country: "Monaco",
      amount: "350.00",
    },
  ];

  const vehicleConfig = [
    {
      label: "Name",
      render: (vehicles) => vehicles.name,
      sortableValue: (vehicles) => vehicles.name,
    },
    {
      label: "Make",
      render: (vehicles) => vehicles.make,
      sortableValue: (vehicles) => vehicles.make,
    },
    {
      label: "Model",
      render: (vehicles) => vehicles.model,
    },
    {
      label: "Cloud",
      render: (vehicles) => (
        <div
          className="color"
          style={{ backgroundColor: vehicles.color }}
        ></div>
      ),
    },
  ];
  const vehicles = [
    {
      id: 1,
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/757.jpg",
      name: "Teri Smith Sr.",
      make: "Mazda",
      model: "CX-5",
      color: "#B2B09B",
    },
    {
      id: 2,
      name: "Dr. Misty Eldrich",
      make: "Chrysler",
      model: "V90",
      color: "darkblue",
    },
    {
      id: 3,
      name: "Jeanette Lind",
      make: "Cadillac",
      model: "Model S",
      color: "pink",
    },
    {
      id: 4,
      name: "Billie Smith",
      make: "Mini",
      model: "Model 3",
      color: "#ED254E",
    },
    {
      id: 5,
      name: "Jenny Bundt",
      make: "Aston Martin",
      model: "Malibu",
      color: "#42273B",
    },
    {
      id: 6,
      name: "Luke Kufic",
      make: "Kia",
      model: "Charger",
      color: "#C1DBE3",
    },
    {
      id: 7,
      name: "Edgar Ebert",
      make: "Volkswagen",
      model: "Alma",
      color: "#C7DFC5",
    },
    {
      id: 8,
      name: "Norma Berg",
      make: "Hyundai",
      model: "Focus",
      color: "#F9DC5C",
    },
    {
      id: 9,
      name: "Chris Kresge",
      make: "Chrysler",
      model: "XC90",
      color: "#465362",
    },
    {
      id: 10,
      name: "Rudolph Hudson",
      make: "Polestar",
      model: "Civic",
      color: "grey",
    },
  ];

  const totalAmount = debtors.reduce((total, debtor) => {
    return total + Number(debtor.amount);
  }, 0);

  return (
    <div>
      <Title>Tables</Title>
      <div className="fade-in-up col-2">
        <Container title="Debtors" icon={<ImAddressBook />}>
          <SortableTable
            data={debtors}
            config={config}
            total={totalAmount.toFixed(2)}
          />
        </Container>
        <Container title="Vehicles" icon={<AiFillCar />}>
          <SortableTable data={vehicles} config={vehicleConfig} />
        </Container>
      </div>
    </div>
  );
}
export default TablePage;
