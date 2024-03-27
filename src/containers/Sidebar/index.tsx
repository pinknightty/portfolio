import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { BotaoTema, Descricao, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Rafael Rosa</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        pinknightty
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Dev Front-End Jr
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
