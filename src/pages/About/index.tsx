import styles from "./aboult.modules.css";
import ImgAboult from "../../assets/alboult.webp";

export function About() {
    return (
        <main>
        <section id="about">
        <div className={`${styles.container__about} container`}>
          <div className={styles.image__about}>
            <img src={ImgAboult} alt="Trocar o Placehold" />
          </div>

          <div className={styles.text__about}>
            <h2>Sobre Nós</h2>
            <p>
              Somos uma empresa especializada na comercialização e
              personalização de produtos promocionais. Nossa equipe é
              estruturada e comprometida em oferecer qualidade superior por meio
              das mais diversas técnicas de gravação.
            </p>
            <br />
            <p>
              Existem diferentes tipos de gravação para brindes personalizados,
              e conhecer cada uma delas é essencial para garantir que o
              resultado final esteja alinhado com sua marca e objetivos de
              campanha. Fatores como o perfil do público, a identidade visual da
              sua marca, o tipo de ação promocional e o material do produto
              influenciam diretamente na escolha da técnica mais apropriada.
            </p>
            <br />
            <p>
              A seguir, apresentamos os principais métodos de gravação
              utilizados em brindes personalizados. Explicamos como cada técnica
              funciona e indicamos suas aplicações mais comuns, ajudando você a
              escolher a opção ideal para valorizar sua marca com eficiência e
              impacto visual.
            </p>
          </div>
        </div>
      </section>
        </main>
    )
}
