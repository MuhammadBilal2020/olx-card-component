import Card from "./components/card"

function App() {
  return (
    <>
<h1 className="text-center  text-[2rem]">Cards</h1>
<div className="cards flex gap-4 justify-center mt-6 flex-wrap">

<Card image="https://images.unsplash.com/photo-1649859398731-d3c4ebca53fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG9wcG8lMjBBNTR8ZW58MHx8MHx8fDA%3D" price='Rs 6,500' title='Oppo A54 (4,128GB) available On Easy Installment Plan' place = "GT Road, Gujar Khan" time = '1 day ago' />

<Card image="https://images.unsplash.com/photo-1654870645973-afeed2419337?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEhvbmRhJTIwQ2l2aWN8ZW58MHx8MHx8fDA%3D" price='Rs 2,795,000' title='Honda Civic VTi Oriel Prosmatec 2013' place = "Pechs I, Karachi" time = '5 day ago'  />

<Card image="https://images.unsplash.com/photo-1715262170930-da1670c4b790?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9uZGElMjBiaWtlfGVufDB8fDB8fHww" price='Rs 14,150' title='Honda CD-70cc available On Easy Installment Plan' place = "Johar Town Phase 1, Lahore" time = '2 day ago'  />

<Card image="https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lbidzJTIwYW5hbG9ndWUlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D" price='Rs 1500' title='mens analogue watch' place = "Kawarpur, Sialkot" time = '1 day ago'  />

<Card image="https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmlrZSUyMHNob2VzfGVufDB8fDB8fHww" price='Rs 6600' title='Shoes NIKE AIR MAX 270 (Branded Shoes/Nike Shoes/Joggers/Imported Shoe' place = "Abdullah Defence Housing Scheme, Faisalabad" time = '3 day ago'  />
</div>

    </>
  )
}

export default App