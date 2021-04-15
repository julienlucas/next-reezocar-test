import Layout from '../components/Layout'
import SectionA from './Home/SectionA'
import SectionB from './Home/SectionB'
import { getCarsData } from '../lib/cars-data'

export default function Home({ allCarsData }) {
  return (
    <Layout home>
      <SectionA/>
      <SectionB cars={allCarsData} />
    </Layout>
  )
}

export async function getStaticProps() {
  const carsData = await getCarsData()
  return {
    props: {
      allCarsData: carsData
    }
  }
}