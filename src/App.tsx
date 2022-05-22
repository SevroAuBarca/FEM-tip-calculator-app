import "./App.css";
import { logo, icon_person, icon_dollar } from "./assets";
import { FormTip, InputData, InputTip, Totaltip } from "./components";
import { useData } from "./hooks/useData";

function App() {
  const [bill, person, tip, totaltip, total, check] = useData();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!bill.bill || !person.people) {
      check.setCheck?.(true);
    } else {
      const dividedTip = Number(bill.bill) * (Number(tip.tip) / 100);
      const tipPerPerson = dividedTip / Number(person.people);
      const totalAmount =
        Number(bill.bill) / Number(person.people) + tipPerPerson;
      totaltip.setTipTotal?.(Number(tipPerPerson.toFixed(2)));
      total.setTotal?.(Number(totalAmount.toFixed(2)));
      check.setCheck?.(false);
    }
  };

  console.log(tip.tip);
  return (
    <main className="font-space bg-Light-grayish-cyan min-h-screen flex justify-center items-center">
      <section className="flex flex-col items-center w-full min-w-min min-h-screen max-w-2xl ">
        <article
          className="w-16 py-8 md:mt-8 md:mb-5
        "
        >
          <img src={logo} alt="logo" className="w-full" />
        </article>
        <article className="w-full p-5 bg-White rounded-t-3xl md:mb-auto md:rounded-b-3xl md:p-6">
          <FormTip onSubmit={handleSubmit}>
            <div className="p-3 md:w-1/2 md:p-0">
              <InputData
                title={"Bill"}
                icon={" bg-dollar"}
                value={bill.bill!}
                setValue={bill.setBill!}
                check={check.check!}
              />
              <InputTip setValue={tip.setTip!} />
              <InputData
                title={"Number of People"}
                icon={" bg-person"}
                value={person.people!}
                setValue={person.setPeople!}
                check={check.check!}
              />
            </div>
            <Totaltip
              tipTotal={totaltip.tipTotal!}
              totalAmount={total.Total!}
            />
          </FormTip>
        </article>
      </section>
    </main>
  );
}

export default App;
