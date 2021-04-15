import Layout from '../components/layout'
import SectionA from './Home/SectionA'
import SectionB from './Home/SectionB'
import { getCarsData } from '../lib/cars'

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