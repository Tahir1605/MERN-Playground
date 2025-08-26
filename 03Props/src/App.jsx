import Card from "./components/Card";

const App = () => {
  return (
    <div className="flex justify-center bg-gray-900 h-screen">
      <div>
        <h1 className="px-20 py-4 bg-green-500 text-3xl font-bold text-center rounded-md cursor-pointer my-10 text-white">
          Props Example
        </h1>
         <Card name="Tahirul islam" btnText="Visit here"/>
         <Card name="Rohit Sharma" btnText="Click here"/>
      </div>
    </div>
  );
};

export default App;
