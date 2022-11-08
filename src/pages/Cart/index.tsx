import { MapPinLine } from "phosphor-react";

export function Cart() {
  return (
    <main>
      <div>
        <h2>Complete seu pedido</h2>

        <div>
          <div>
            <MapPinLine />
            <p>Endereço de Entrega</p>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>

          <input type="text" placeholder="CEP" />
        </div>
      </div>

      <aside>
        <h2>Cafés selecionados</h2>
      </aside>
    </main>
  );
}
