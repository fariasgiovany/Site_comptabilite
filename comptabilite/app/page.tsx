import Body1 from "./components/components_page/Body1"
import Body2 from "./components/components_page/Body2"
import Compempresa from "./components/components_page/Compempresa"
import IRPF from "./components/components_page/IRPF"
export default function Home() {
  return (
    <>

      
      <Body1 />
      <div id="irpf">
        <IRPF />
      </div>
      <div id="servicos">
        <Body2  />
      </div>
      <div id="empresa">
        <Compempresa />
      </div>
    </>
  );
}
  