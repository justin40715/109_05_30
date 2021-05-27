import  Layout from '../../components/layout/Layout';
import ShopContainer from '../../components/shop/ShopContainer';

export async function getServerSideProps(){
    const response = await fetch('https://dry-wave-60207.herokuapp.com/api/shop');
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
      <ShopContainer key={categories[0].cid} categories={categories} />
    </Layout>
  )
}
