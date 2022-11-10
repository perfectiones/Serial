import CostItem from "./CostItem";

function PageTwo() {
    const costs = [
        {
          data: new Date(2021, 12, 21),
          description: "Холодильник" ,
          amount: 999.99
        },
        {
          data: new Date(2021, 12, 25),
          description: "MacBook" ,
          amount: 175
        },
        {
          data: new Date(2021, 12, 3),
          description: "T-shirt" ,
          amount: 10.99
        }
      ];

    return (
      <div>
        <CostItem
          data={costs[0].data}
          description={costs[0].description}
          amount={costs[0].amount}
        />
        <CostItem
          data={costs[1].data}
          description={costs[1].description}
          amount={costs[1].amount}
        />
        <CostItem
          data={costs[2].data}
          description={costs[2].description}
          amount={costs[2].amount}
        />
      </div>
    );
}

export default PageTwo;