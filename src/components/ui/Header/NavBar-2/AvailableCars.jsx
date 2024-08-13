import CarBlog from "./CarBlog";

function AvailableCars() {
  return (
    <main className="  bg-gray-100">
      <div className="w-11/12 mx-auto ">
        <h1 className="text-3xl font-semibold pt-10">
          Available Rental Car Sizes and Models
        </h1>

        <CarBlog
          description="Cars offer great comfort as you tour around the country. Automatic
              vehicles which can take up to 5 people and carry more baggage with
              ease. Choose your favorite car brand and model every time you need
              to rent a car."
          carImage="/car.jpg"
          type="Cars"
        />
        <CarBlog
          description="Cars offer great comfort as you tour around the country. Automatic
              vehicles which can take up to 5 people and carry more baggage with
              ease. Choose your favorite car brand and model every time you need
              to rent a car."
          carImage="/suv.jpg"
          type="Suv's"
        />
        <CarBlog
          description="Cars offer great comfort as you tour around the country. Automatic
              vehicles which can take up to 5 people and carry more baggage with
              ease. Choose your favorite car brand and model every time you need
              to rent a car."
          carImage="/truck.jpg"
          type="Trucks"
        />
        <CarBlog
          description="Cars offer great comfort as you tour around the country. Automatic
              vehicles which can take up to 5 people and carry more baggage with
              ease. Choose your favorite car brand and model every time you need
              to rent a car."
          carImage="/van.jpg"
          type="Vans"
        />
        <CarBlog
          description="Cars offer great comfort as you tour around the country. Automatic
              vehicles which can take up to 5 people and carry more baggage with
              ease. Choose your favorite car brand and model every time you need
              to rent a car."
          carImage="/luxury-car.jpg"
          type="Luxury Cars"
        />
      </div>
    </main>
  );
}

export default AvailableCars;
