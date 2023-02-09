import CartSmall from "../../../../assets/icons/CartSmall.svg";
import StopwatchSmall from "../../../../assets/icons/StopwatchSmall.svg";
import PackageSmall from "../../../../assets/icons/PackageSmall.svg";
import CoffeeSmall from "../../../../assets/icons/CoffeeSmall.svg";
import CoffeeIntro from "../../../../assets/CoffeeIntro.png";
import {
  IntroContent,
  IntroSubtitle,
  IntroTitle,
  IntroWrapper,
  IntroItems,
  IntroList,
  IntroListItem,
  IntroImage,
  IntroContainer,
} from "./styles";

export function Intro() {
  return (
    <IntroContainer>
      <IntroWrapper>
        <IntroContent>
          <IntroTitle>
            Encontre o café perfeito para qualquer hora do dia.
          </IntroTitle>
          <IntroSubtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora.
          </IntroSubtitle>
          <IntroItems>
            <IntroList>
              <IntroListItem>
                <img src={CartSmall} />
                <p>Compra simples e segura</p>
              </IntroListItem>
              <IntroListItem>
                <img src={StopwatchSmall} />
                <p>Entrega rápida e rastreada</p>
              </IntroListItem>
            </IntroList>
            <IntroList>
              <IntroListItem>
                <img src={PackageSmall} />
                <p>Embalagem mantém o café intacto</p>
              </IntroListItem>
              <IntroListItem>
                <img src={CoffeeSmall} />
                <p>O café chega fresquinho até você</p>
              </IntroListItem>
            </IntroList>
          </IntroItems>
        </IntroContent>
        <IntroImage>
          <img src={CoffeeIntro} />
        </IntroImage>
      </IntroWrapper>
    </IntroContainer>
  );
}
