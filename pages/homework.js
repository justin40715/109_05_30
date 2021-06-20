import  Layout from '../components/layout/Layout';
import Homework from '../components/homework/homework';

export async function getServerSideProps(){
    const response = await fetch('https://crownstrapi-0606.herokuapp.com/categories');
    const categories = await response.json();

    return{
      props:{
        categories
      }
    }
}

export default function Home({categories}) {
  console.log('index',categories);
  return (
    <Layout>
      <Homework key={categories[0].cid} categories={categories} />
    </Layout>
  )
}
