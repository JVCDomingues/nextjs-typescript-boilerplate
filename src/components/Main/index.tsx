import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <S.Title>Boileplate - Next.JS</S.Title>
    <S.Description>
      TypeScript, ReactJS, NextJS e Styled Components
    </S.Description>
    <S.Illustration
      src="img/hero-illustration.svg"
      alt="Imagem de um programador em frente a uma tela com código"
    />
  </S.Wrapper>
)

export default Main
