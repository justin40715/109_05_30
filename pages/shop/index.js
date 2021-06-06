import  Layout from '../../components/layout/Layout';
import ShopContainer from '../../components/shop/ShopContainer';

export async function getServerSideProps(){
    const response = await fetch('https://crownstrapi-0606.herokuapp.com/products');
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
      <ShopContainer key={categories[0].cid} categories={categories} Title="Shops"/>
    </Layout>
  )
}
