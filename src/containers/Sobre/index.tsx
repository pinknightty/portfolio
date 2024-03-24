import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GitHubSession } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore velit
      error dicta aut quod quam officiis illum, nulla labore suscipit, cumque
      aliquam unde numquam. Asperiores nulla consequatur numquam ea quibusdam?
    </Paragrafo>
    <GitHubSession>
      <img src="https://github-readme-stats.vercel.app/api?username=pinknightty&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=pinknightty&layout=compact&langs_count=7&theme=dracula" />
    </GitHubSession>
  </section>
)

export default Sobre
