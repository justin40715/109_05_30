import  Layout from '../../components/layout/Layout';
import ItemContainer from '../../components/shop/ItemContainer';

export async function getServerSideProps(){
    const response = await fetch('https://dry-wave-60207.herokuapp.com/api/shop/womens');
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
      <ItemContainer key={categories[0].cid} categories={categories} Title="womens" />
    </Layout>
  )
}
