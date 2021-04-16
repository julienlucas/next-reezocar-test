import Layout from '../components/Layout'
import SectionA from './Home/SectionA'
import SectionB from './Home/SectionB'
import SectionC from './Home/SectionC'
import { getCarsData } from '../lib/cars-data'
import { getTestimonialsData } from '../lib/testimonials-data'

export default function Home({ carsData, testimonialsData }) {
  return (
    <Layout home>
      <SectionA testimonialsData={testimonialsData} />
      <SectionB carsData={carsData} />
      <SectionC />
    </Layout>
  )
}

export async function getServerSideProps() {
  const carsData = await getCarsData()
  const testimonialsData = await getTestimonialsData()

  return {
    props: {
      carsData,
      testimonialsData
    }
  }
}