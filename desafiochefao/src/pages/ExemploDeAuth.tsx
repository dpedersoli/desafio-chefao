import HeaderArrow from '../components/headerArrow'
import { AuthContext } from '../providers/AutheticationContext';
import { useContext } from 'react';
import Goals from './Goal'

const Home = () => {
  const { user } = useContext(AuthContext)

  return (
    <>
      <div>
        {user.isGoalSet ? <div>retorna tela 'home'</div> : <Goals />}



      </div>
    </>
  )
}

export default Home;