import './App.css'
import TestimonialCard from './components/TestimonialCard'

function App() {
let data =[
  {
    CustomerName:"Emily Watson",
    ReviewText:"This service was amazing! Highly recommended"
  },
  {
    CustomerName:"gautham",
    ReviewText:"you need to study more languages"
  },
  {
    CustomerName:"Heamnth",
    ReviewText:"improve medical terms"
  },
  {
    CustomerName:"Manickam",
    ReviewText:"start a company"
  }
]
  return (
    <div className='class'>
       {data.map((item) => (
        <TestimonialCard key={item.CustomerName} name={item.CustomerName} service={item.ReviewText} />
      ))}
    </div>
  )
}

export default App;



















