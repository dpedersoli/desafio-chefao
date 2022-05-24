import HeaderArrow from '../components/headerArrow'
import { AuthContext } from '../providers/AutheticationContext';
import { useContext } from 'react';
import Goals from '../components/Goals'

const Home = () => {
  const { user } = useContext(AuthContext)

  return (
    <>
      <div>
        <HeaderArrow />
        {user.isGoalSet ? <div>retorna tela 'home'</div> : <Goals />}
      </div>
    </>
  )
}

export default Home;