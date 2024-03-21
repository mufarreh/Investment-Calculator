import Input from "./components/Input";
import TableData from "./components/TableData";
import TableRow from "./components/TableRow";
import { useState } from "react";
import { calculateInvestmentResults, formatter } from "./util/investment.js";

const initialData = {
  initialInvestment: 100,
  annualInvestment: 100,
  expectedReturn: 400,
  duration: 5,
};

function App() {
  const [inputData, setInputData] = useState(initialData);
  const annualData = calculateInvestmentResults(inputData);
  const inputIsValid = inputData.duration >= 1;
  console.log(inputData);
  console.log(annualData);
  function handleChange(inputIdentifier, value) {
    setInputData((prevData) => {
      console.log(inputData);
      return {
        ...prevData,
        [inputIdentifier]: +value,
      };
    });
  }

  return (
    <div>
      <section id="user-input">
        <div className="input-group">
          <Input
            inputData={inputData}
            onChange={handleChange}
            label={"Initial Investment"}
          >
            initialInvestment
          </Input>
          <Input
            inputData={inputData}
            onChange={handleChange}
            label={"Annual Investment"}
          >
            annualInvestment
          </Input>
        </div>
        <div className="input-group">
          <Input
            inputData={inputData}
            onChange={handleChange}
            label={"Expected Return"}
          >
            expectedReturn
          </Input>
          <Input
            inputData={inputData}
            onChange={handleChange}
            label={"Duration"}
          >
            duration
          </Input>
        </div>
      </section>
      <table id="result">
        {!inputIsValid ? (
          <p className="center">Please enter valid duration</p>
        ) : (
          <>
            <TableRow></TableRow>
            <tbody>
              {annualData.map((data) => {
                return (
                  <TableData
                    key={data.year}
                    formatter={formatter}
                    initialInvestment={inputData.initialInvestment}
                    {...data}
                  ></TableData>
                );
              })}
            </tbody>
          </>
        )}
      </table>
    </div>
  );
}

export default App;
