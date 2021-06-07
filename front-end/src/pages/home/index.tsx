import MenuFloating from '../../module/menuFloating/index'
import Input from '../../module/input/index'
const Home = () => {
    return (
        <>
            <Input type="text" placeholder="testes" require={true} />
            <MenuFloating />
        </>
 
    )    
}

export default Home