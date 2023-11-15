import MeuComponente from "./components/MeuComponente"
import EstadosEEventos from "./components/EstadosEEventos"
import RenderizacaoCondicional from "./components/RenderizacaoCondicional"
import MeuBotao from "./components/MeuBotao"
import ListasEChaves from "./components/ListasEChaves"
import EfeitosColaterais from "./components/EfeitoColaterais"
import DadosFetch from "./components/DadosFetch"
import MeuContadorCSS from "./components/MeuContadorCSS"

export default function App() {
 
  return (
    <div>
      <h1>Olá mundo, react!</h1>
      <MeuComponente />
      <MeuBotao conteudo='me clique' />
      <MeuBotao conteudo='depois aqui' />
      <MeuBotao conteudo='e por fim aqui' />

      {/* <CardDePrograma image='' titulo='credit suisse' subtitle='python' /> */}

      <EstadosEEventos />
      <RenderizacaoCondicional />
      <ListasEChaves />
      <EfeitosColaterais />
      <DadosFetch />
      <MeuContadorCSS />
    </div>
  )
}
