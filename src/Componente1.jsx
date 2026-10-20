function Componente1() {
    let imagens = {
    img1: 'https://image.shutterstock.com/image-photo/native-american-teepee-grassy-plains-600w-1613143510.jpg',
    img2: 'https://image.shutterstock.com/image-photo/park-small-peoples-north-600w-796680427.jpg',
  }
  const trocarimagem = () => {
    setImagem(state => state === 'img1' ? 'img2': 'img1');
  }
  const [imagem, setImagem] = React.useState('img1');

    return (
        <>
            <div id="texto1">
                <div id="texto1Text" class="text-white text-center">
                    <h1>Chega de ficar trocando de aplicativo</h1>
                    <p>Crie, edite, faça o layout e depois edite de novo... sem nunca sair do arquivo .af. O Affinity tem todas as ferramentas profissionais de design e edição de fotos que voçe precisa em um único app e extremamente rápido e poderoso</p>
                </div>

             <div>
      <div style={{marginTop: '15px'}}>
        <button onClick={trocarimagem}>Trocar para {imagem=== 'img1' ? 'img2': 'img1'}</button>
      </div>
      <div style={{marginTop: '15px'}}>
        <img src={imagens[imagem]} style={{width:'75%'}} />
      </div>      
    </div>

            </div>
        </>
    );
}

export default Componente1;